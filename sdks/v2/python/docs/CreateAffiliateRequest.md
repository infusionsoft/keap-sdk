# CreateAffiliateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length | 
**status** | **str** | The Affiliate Status | [optional] [default to 'INACTIVE']
**name** | **str** | The Affiliate name will be derived from the Contact, when not explicitly provided | [optional] 
**contact_id** | **str** | The contactId identifier , Must be a positive number | 
**parent_affiliate_id** | **str** | The Parent Affiliate Id | [optional] 
**notify_on_sale** | **bool** | Whether to notify on sale events | [optional] 
**notify_on_lead** | **bool** | Whether to notify on lead events | [optional] 
**track_leads_days** | **int** | Number of days to track leads | [optional] 
**password** | **str** | Affiliate portal password | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) | List of custom field values to apply to this affiliate | [optional] 

## Example

```python
from keap_core_v2_client.models.create_affiliate_request import CreateAffiliateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAffiliateRequest from a JSON string
create_affiliate_request_instance = CreateAffiliateRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAffiliateRequest.to_json())

# convert the object into a dict
create_affiliate_request_dict = create_affiliate_request_instance.to_dict()
# create an instance of CreateAffiliateRequest from a dict
create_affiliate_request_from_dict = CreateAffiliateRequest.from_dict(create_affiliate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


