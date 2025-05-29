# MoveDealsForContactsRequest

Request model for moving specific deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_ids** | **List[str]** | List of IDs of the contacts whose active deals need to be moved. | 
**from_stage** | **str** | The ID of the stage from which the deals should be moved. | 
**to_stage** | **str** | The ID of the stage to which the deals should be moved. | 

## Example

```python
from keap_core_v2_client.models.move_deals_for_contacts_request import MoveDealsForContactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveDealsForContactsRequest from a JSON string
move_deals_for_contacts_request_instance = MoveDealsForContactsRequest.from_json(json)
# print the JSON string representation of the object
print(MoveDealsForContactsRequest.to_json())

# convert the object into a dict
move_deals_for_contacts_request_dict = move_deals_for_contacts_request_instance.to_dict()
# create an instance of MoveDealsForContactsRequest from a dict
move_deals_for_contacts_request_from_dict = MoveDealsForContactsRequest.from_dict(move_deals_for_contacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


