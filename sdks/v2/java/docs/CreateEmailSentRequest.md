

# CreateEmailSentRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**clickedTime** | **String** |  |  [optional] |
|**contactId** | **String** |  |  [optional] |
|**headers** | **String** |  |  [optional] |
|**htmlContent** | **String** | Base64 encoded HTML |  [optional] |
|**openedTime** | **String** |  |  [optional] |
|**originalProvider** | [**OriginalProviderEnum**](#OriginalProviderEnum) | Provider that sent the email, defaults to UNKNOWN |  [optional] |
|**originalProviderId** | **String** | Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record. |  [optional] |
|**plainContent** | **String** | Base64 encoded text |  [optional] |
|**providerSourceId** | **String** | The email address of the synced email account that generated this message. |  [optional] |
|**receivedTime** | **String** |  |  [optional] |
|**sentFromAddress** | **String** |  |  [optional] |
|**sentFromReplyAddress** | **String** |  |  [optional] |
|**sentTime** | **String** |  |  [optional] |
|**sentToAddress** | **String** |  |  |
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

