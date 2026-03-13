# RestAffiliate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The AffiliateId | [optional] 
**code** | **str** | The Affiliate Code | [optional] 
**name** | **str** | The Affiliate Name | [optional] 
**status** | **str** | The Affiliate Status | [optional] 
**contact_id** | **str** | The ContactID | [optional] 
**unique_site_id** | **str** | The Affiliate PortalSite Id | [optional] 
**date_created** | **str** | Date affiliate was created (ISO-8601) | [optional] 
**parent_affiliate_id** | **str** | The Parent Affiliate Id | [optional] 
**notify_on_sale** | **bool** | Whether to notify on sale events | [optional] 
**notify_on_lead** | **bool** | Whether to notify on lead events | [optional] 
**track_leads_days** | **int** | Number of days to track leads | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_affiliate import RestAffiliate

# TODO update the JSON string below
json = "{}"
# create an instance of RestAffiliate from a JSON string
rest_affiliate_instance = RestAffiliate.from_json(json)
# print the JSON string representation of the object
print(RestAffiliate.to_json())

# convert the object into a dict
rest_affiliate_dict = rest_affiliate_instance.to_dict()
# create an instance of RestAffiliate from a dict
rest_affiliate_from_dict = RestAffiliate.from_dict(rest_affiliate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


