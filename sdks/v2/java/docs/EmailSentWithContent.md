

# EmailSentWithContent


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**clickedTime** | **String** |  |  [optional] |
|**contactId** | **String** |  |  [optional] |
|**headers** | **String** |  |  [optional] |
|**htmlContent** | **String** | Base64 encoded HTML |  [optional] |
|**id** | **String** |  |  [optional] |
|**openedTime** | **String** |  |  [optional] |
|**originalProvider** | [**OriginalProviderEnum**](#OriginalProviderEnum) |  |  [optional] |
|**originalProviderId** | **String** |  |  [optional] |
|**plainContent** | **String** | Base64 encoded plain text |  [optional] |
|**providerSourceId** | **String** |  |  [optional] |
|**receivedTime** | **String** |  |  [optional] |
|**sentFromAddress** | **String** |  |  [optional] |
|**sentFromReplyAddress** | **String** |  |  [optional] |
|**sentTime** | **String** |  |  [optional] |
|**sentToAddress** | **String** |  |  [optional] |
|**sentToBccAddressList** | **List&lt;String&gt;** |  |  [optional] |
|**sentToCcAddressList** | **List&lt;String&gt;** |  |  [optional] |
|**subject** | **String** |  |  [optional] |



## Enum: OriginalProviderEnum

| Name | Value |
|---- | -----|
| UNKNOWN | &quot;UNKNOWN&quot; |
| INFUSIONSOFT | &quot;INFUSIONSOFT&quot; |
| MICROSOFT | &quot;MICROSOFT&quot; |
| GOOGLE | &quot;GOOGLE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

