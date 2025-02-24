# CreateAffiliateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length | 
**contact_id** | **str** | The contactId identifier , Must be a positive number | 
**name** | **str** | The Affiliate name will be derived from the Contact, when not explicitly provided | [optional] 
**status** | **str** | The Affiliate Status | 

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


