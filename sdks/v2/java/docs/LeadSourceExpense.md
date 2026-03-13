

# LeadSourceExpense


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The unique identifier for the expense. |  [optional] |
|**title** | **String** | The title of the expense |  [optional] |
|**notes** | **String** | The notes for the expense |  [optional] |
|**amount** | [**CurrencyValue**](CurrencyValue.md) | The amount of the expense |  [optional] |
|**leadSourceId** | **String** | The ID of the lead source this expense belongs to |  [optional] |
|**leadSourceRecurringExpenseId** | **String** | If this expense was incurred from a recurring expense, this is the ID of that recurring expense |  [optional] |
|**createTime** | **ZonedDateTime** | The date the expense was created |  [optional] |
|**updateTime** | **ZonedDateTime** | The date the expense was last updated |  [optional] |
|**incurredTime** | **ZonedDateTime** | The date the expense was incurred |  [optional] |


## Implemented Interfaces

* Serializable

