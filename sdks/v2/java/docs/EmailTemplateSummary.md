

# EmailTemplateSummary

Email template metadata returned by the list endpoint. Does not include body content; use GET /v2/emails/templates/{id} for full detail.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **Long** | The id of the template |  [optional] |
|**pieceTitle** | **String** | The title of the template |  [optional] |
|**categories** | **List&lt;String&gt;** | The categories associated with the email |  [optional] |
|**fromAddress** | **String** | The from address of the email |  [optional] |
|**toAddress** | **String** | The to address of the email |  [optional] |
|**ccAddress** | **String** | The cc address of the email |  [optional] |
|**bccAddress** | **String** | The bcc address of the email |  [optional] |
|**subject** | **String** | The subject of the email |  [optional] |
|**contentType** | [**ContentTypeEnum**](#ContentTypeEnum) | The content type of the email |  [optional] |
|**mergeContext** | **String** | The merge context of the email |  [optional] |



## Enum: ContentTypeEnum

| Name | Value |
|---- | -----|
| TEXT | &quot;TEXT&quot; |
| HTML | &quot;HTML&quot; |
| MULTIPART | &quot;MULTIPART&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

