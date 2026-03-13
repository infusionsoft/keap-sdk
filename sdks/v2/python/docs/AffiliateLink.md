# AffiliateLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Affiliate link ID | [optional] 
**name** | **str** | Link name | [optional] 
**affiliate_id** | **str** | Associated affiliate ID | [optional] 
**local_url_code** | **str** | URL code for tracking | [optional] 
**redirect_url** | **str** | Destination URL | [optional] 
**program_ids** | **List[str]** | Associated program IDs | [optional] 
**date_created** | **str** | Date link was created (ISO-8601) | [optional] 

## Example

```python
from keap_core_v2_client.models.affiliate_link import AffiliateLink

# TODO update the JSON string below
json = "{}"
# create an instance of AffiliateLink from a JSON string
affiliate_link_instance = AffiliateLink.from_json(json)
# print the JSON string representation of the object
print(AffiliateLink.to_json())

# convert the object into a dict
affiliate_link_dict = affiliate_link_instance.to_dict()
# create an instance of AffiliateLink from a dict
affiliate_link_from_dict = AffiliateLink.from_dict(affiliate_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


