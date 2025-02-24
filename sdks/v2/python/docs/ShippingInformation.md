# ShippingInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) |  | [optional] 
**family_name** | **str** |  | [optional] 
**given_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**invoice_to_company** | **bool** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.shipping_information import ShippingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingInformation from a JSON string
shipping_information_instance = ShippingInformation.from_json(json)
# print the JSON string representation of the object
print(ShippingInformation.to_json())

# convert the object into a dict
shipping_information_dict = shipping_information_instance.to_dict()
# create an instance of ShippingInformation from a dict
shipping_information_from_dict = ShippingInformation.from_dict(shipping_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


