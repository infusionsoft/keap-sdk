# InvoiceFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.invoice_file import InvoiceFile

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceFile from a JSON string
invoice_file_instance = InvoiceFile.from_json(json)
# print the JSON string representation of the object
print(InvoiceFile.to_json())

# convert the object into a dict
invoice_file_dict = invoice_file_instance.to_dict()
# create an instance of InvoiceFile from a dict
invoice_file_from_dict = InvoiceFile.from_dict(invoice_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


