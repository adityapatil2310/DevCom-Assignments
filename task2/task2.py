import random
import datetime
import uuid




# OBJECTIVES TODO:
# 1) Read the code and understand it.
# 2) Read the code again and understand it better.
# 3) Feel free to do 1 and 2 however many times you feel like.
# 4) Complete the SyncService implementation. Note that the SyncService.onMessage and SyncService.__init__ function signature must not be altered.

# function signature = no. and type of parameters the function takes.


# dictionary with keys 'a', 'b', and 'c', each associated with a random UUID
_DATA_KEYS = ["a","b","c"]
class Device:
    def __init__(self, id):
        self._id = id
        self.records = [] #collected records
        self.sent = []


    def obtainData(self) -> dict:
        """Returns a single new datapoint from the device.
        Identified by type `record`. `timestamp` records when the record was sent and `dev_id` is the device id.
        `data` is the data collected by the device."""
        if random.random() < 0.4:
            # Sometimes there's no new data
            #40% chance of not generating new data
            return {}


        rec = {
            'type': 'record', 'timestamp': datetime.datetime.now().isoformat(), 'dev_id': self._id,
            'data': {kee: str(uuid.uuid4()) for kee in _DATA_KEYS}
            #creating new record when I-card is tapped
        };self.sent.append(rec) #appending the new record to "records" list
        return rec


    def probe(self) -> dict:
        """Returns a probe request to be sent to the SyncService.
        Identified by type `probe`. `from` is the index number from which the device is asking for the data."""
        if random.random() < 0.5:
            # Sometimes the device forgets to probe the SyncService
            # 50% chance of no probe
            return {}


        return {'type': 'probe', 'dev_id': self._id, 'from': len(self.records)}


    def onMessage(self, data: dict):
        """Receives updates from the server"""
        if random.random() < 0.6:
            # Sometimes devices make mistakes. Let's hope the SyncService handles such failures.
            #60% chance of mistake
            return
       
        if data['type'] == 'update':
            _from = data['from']
            if _from > len(self.records): #if true, means trying to update something which is not in the records. Hence, return w/o doing anything
                return
            self.records = self.records[:_from] + data['data'] #concatenate/update the old records


class SyncService:
    def __init__(self):
        self.aggregated_data = [] # list to store the data received from all devices

    def _handle_probe(self, data: dict) -> dict:
        from_index = data['from']
        update_data = self.aggregated_data[from_index:]
        return {'type': 'update', 'from': from_index, 'data': update_data}

    def _handle_record(self, data: dict):
        self.aggregated_data.append(data['data'])
       
    def onMessage(self, data: dict):
        """Handle messages received from devices.
        Return the desired information in the correct format (type `update`, see Device.onMessage and testSyncing to understand format intricacies) in response to a `probe`.
        No return value required on handling a `record`."""
        # write code to handle a 'probe' request and return nothing for 'record'

        if data['type'] == 'probe':
            return self._handle_probe(data)
        elif data['type'] == 'record':
            self._handle_record(data)



# function to test the implementation of SyncService class
def testSyncing():
    devices = [Device(f"dev_{i}") for i in range(10)] #creates 10 dummy devices
    syn = SyncService()
   
#  send 1 million probe requests to SyncService
    _N = int(1e6)
    for i in range(_N):
        for _dev in devices:
            syn.onMessage(_dev.obtainData())
            _dev.onMessage(syn.onMessage(_dev.probe()))


    done = False
    while not done:
        for _dev in devices: _dev.onMessage(syn.onMessage(_dev.probe()))
        num_recs = len(devices[0].records)
        done = all([len(_dev.records) == num_recs for _dev in devices])
        # continue the while loop until all devices have same no. of records

    # asserting equivalence
    ver_start = [0] * len(devices) #list of zeros with a length equal to the number of devices
    for i,rec in enumerate(devices[0].records):
        _dev_idx = int(rec['dev_id'].split("_")[-1]) #extracts index of device from 'dev_id' 
        assertEquivalent(rec, devices[_dev_idx].sent[ver_start[_dev_idx]]) #checks if current record from the first device matches the corresponding sent record 
        for _dev in devices[1:]: #iterates over rest of the devices (starting from the second device) 
            assertEquivalent(rec, _dev.records[i]) # check if current record from the 1st device matches the record at index i in other devices.
        ver_start[_dev_idx] += 1 # increments the starting index
   
def assertEquivalent(d1:dict, d2:dict):
    assert d1['dev_id'] == d2['dev_id']
    assert d1['timestamp'] == d2['timestamp']
    for kee in _DATA_KEYS:
        assert d1['data'][kee] == d2['data'][kee]