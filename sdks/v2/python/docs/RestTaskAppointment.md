# RestTaskAppointment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Appointment ID | [optional] 
**title** | **str** | The appointment title | [optional] 
**description** | **str** | The appointment description/notes | [optional] 
**location** | **str** | The appointment location | [optional] 
**contact_id** | **str** | The associated Contact ID | [optional] 
**user_id** | **str** | The ID of the user the appointment is assigned to | [optional] 
**start_time** | **str** | Appointment start date/time (ISO-8601) | [optional] 
**end_time** | **str** | Appointment end date/time (ISO-8601) | [optional] 
**create_time** | **str** | Date the appointment was created (ISO-8601) | [optional] 
**update_time** | **str** | Date the appointment was last updated (ISO-8601) | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_task_appointment import RestTaskAppointment

# TODO update the JSON string below
json = "{}"
# create an instance of RestTaskAppointment from a JSON string
rest_task_appointment_instance = RestTaskAppointment.from_json(json)
# print the JSON string representation of the object
print(RestTaskAppointment.to_json())

# convert the object into a dict
rest_task_appointment_dict = rest_task_appointment_instance.to_dict()
# create an instance of RestTaskAppointment from a dict
rest_task_appointment_from_dict = RestTaskAppointment.from_dict(rest_task_appointment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


