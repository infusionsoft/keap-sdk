# Campaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the campaign | [optional] 
**name** | **str** | The name of the campaign | [optional] 
**locked** | **bool** | Whether the campaign is locked for editing | [optional] 
**date_created** | **datetime** | The date and time when the campaign was created. In ISO-8601 format | [optional] 
**published_date** | **datetime** | The date and time when the campaign was published. In ISO-8601 format | [optional] 
**published_status** | **bool** | Whether the campaign is published | [optional] 
**error_message** | **str** | Error message if the campaign has issues | [optional] 
**time_zone** | **str** | The timezone of the campaign | [optional] 
**published_time_zone** | **str** | The timezone used when the campaign was published | [optional] 
**created_by_global_id** | **str** | The global ID of the user who created the campaign | [optional] 
**active_contact_count** | **int** | Number of contacts currently active in this campaign | [optional] 
**completed_contact_count** | **int** | Number of contacts who have completed this campaign | [optional] 

## Example

```python
from keap_core_v2_client.models.campaign import Campaign

# TODO update the JSON string below
json = "{}"
# create an instance of Campaign from a JSON string
campaign_instance = Campaign.from_json(json)
# print the JSON string representation of the object
print(Campaign.to_json())

# convert the object into a dict
campaign_dict = campaign_instance.to_dict()
# create an instance of Campaign from a dict
campaign_from_dict = Campaign.from_dict(campaign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


