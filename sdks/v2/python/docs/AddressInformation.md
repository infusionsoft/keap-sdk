# AddressInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**is_invoice_to_company** | **bool** |  | [optional] 
**last_name** | **str** |  | [optional] 
**line1** | **str** |  | [optional] 
**line2** | **str** |  | [optional] 
**locality** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**region** | **str** |  | [optional] 
**zip_code** | **str** |  | [optional] 
**zip_four** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.address_information import AddressInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AddressInformation from a JSON string
address_information_instance = AddressInformation.from_json(json)
# print the JSON string representation of the object
print(AddressInformation.to_json())

# convert the object into a dict
address_information_dict = address_information_instance.to_dict()
# create an instance of AddressInformation from a dict
address_information_from_dict = AddressInformation.from_dict(address_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


