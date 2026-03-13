

# EmailSent

A sent email record

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The unique identifier of the email |  [optional] |
|**subject** | **String** | The subject of the email |  [optional] |
|**headers** | **String** | Email headers |  [optional] |
|**contactId** | **String** | The contact ID who received the email |  [optional] |
|**sentToAddress** | **String** | The email address the email was sent to |  [optional] |
|**sentToCcAddressList** | **List&lt;String&gt;** | List of CC email addresses |  [optional] |
|**sentToBccAddressList** | **List&lt;String&gt;** | List of BCC email addresses |  [optional] |
|**sentFromAddress** | **String** | The sender&#39;s email address |  [optional] |
|**sentFromReplyAddress** | **String** | The reply-to email address |  [optional] |
|**sentTime** | **ZonedDateTime** | When the email was sent, in ISO-8601 format |  [optional] |
|**receivedTime** | **ZonedDateTime** | When the email was received, in ISO-8601 format |  [optional] |
|**openedTime** | **ZonedDateTime** | When the email was opened, in ISO-8601 format |  [optional] |
|**clickedTime** | **ZonedDateTime** | When a link in the email was clicked, in ISO-8601 format |  [optional] |
|**originalProviderId** | **String** | The original provider&#39;s message ID |  [optional] |
|**originalProvider** | [**OriginalProviderEnum**](#OriginalProviderEnum) | The email provider that sent the email |  [optional] |
|**providerSourceId** | **String** | The synced email account that generated this message |  [optional] |



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

