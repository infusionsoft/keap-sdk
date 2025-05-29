# MoveDealsForContactsResponse

Response model for moving deals of contacts in bulk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**moved_deal_ids** | **List[str]** | List of IDs of the deals that have been moved. | [optional] 

## Example

```python
from keap_core_v2_client.models.move_deals_for_contacts_response import MoveDealsForContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MoveDealsForContactsResponse from a JSON string
move_deals_for_contacts_response_instance = MoveDealsForContactsResponse.from_json(json)
# print the JSON string representation of the object
print(MoveDealsForContactsResponse.to_json())

# convert the object into a dict
move_deals_for_contacts_response_dict = move_deals_for_contacts_response_instance.to_dict()
# create an instance of MoveDealsForContactsResponse from a dict
move_deals_for_contacts_response_from_dict = MoveDealsForContactsResponse.from_dict(move_deals_for_contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


