/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Keap.Core.V2.Client.OpenAPIDateConverter;

namespace Keap.Core.V2.Model
{
    /// <summary>
    /// CreateEmailSentRequest
    /// </summary>
    [DataContract(Name = "CreateEmailSentRequest")]
    public partial class CreateEmailSentRequest : IValidatableObject
    {
        /// <summary>
        /// Provider that sent the email, defaults to UNKNOWN
        /// </summary>
        /// <value>Provider that sent the email, defaults to UNKNOWN</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum OriginalProviderEnum
        {
            /// <summary>
            /// Enum UNKNOWN for value: UNKNOWN
            /// </summary>
            [EnumMember(Value = "UNKNOWN")]
            UNKNOWN,

            /// <summary>
            /// Enum INFUSIONSOFT for value: INFUSIONSOFT
            /// </summary>
            [EnumMember(Value = "INFUSIONSOFT")]
            INFUSIONSOFT,

            /// <summary>
            /// Enum MICROSOFT for value: MICROSOFT
            /// </summary>
            [EnumMember(Value = "MICROSOFT")]
            MICROSOFT,

            /// <summary>
            /// Enum GOOGLE for value: GOOGLE
            /// </summary>
            [EnumMember(Value = "GOOGLE")]
            GOOGLE
        }

        /// <summary>
        /// Provider that sent the email, defaults to UNKNOWN
        /// </summary>
        /// <value>Provider that sent the email, defaults to UNKNOWN</value>
        [DataMember(Name = "original_provider", EmitDefaultValue = false)]
        public OriginalProviderEnum? OriginalProvider { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateEmailSentRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateEmailSentRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateEmailSentRequest" /> class.
        /// </summary>
        /// <param name="clickedTime">clickedTime.</param>
        /// <param name="contactId">contactId.</param>
        /// <param name="headers">headers.</param>
        /// <param name="htmlContent">Base64 encoded HTML.</param>
        /// <param name="openedTime">openedTime.</param>
        /// <param name="originalProvider">Provider that sent the email, defaults to UNKNOWN.</param>
        /// <param name="originalProviderId">Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record..</param>
        /// <param name="plainContent">Base64 encoded text.</param>
        /// <param name="providerSourceId">The email address of the synced email account that generated this message..</param>
        /// <param name="receivedTime">receivedTime.</param>
        /// <param name="sentFromAddress">sentFromAddress.</param>
        /// <param name="sentFromReplyAddress">sentFromReplyAddress.</param>
        /// <param name="sentTime">sentTime.</param>
        /// <param name="sentToAddress">sentToAddress (required).</param>
        /// <param name="sentToBccAddressList">sentToBccAddressList.</param>
        /// <param name="sentToCcAddressList">sentToCcAddressList.</param>
        /// <param name="subject">subject.</param>
        public CreateEmailSentRequest(string clickedTime = default, string contactId = default, string headers = default, string htmlContent = default, string openedTime = default, OriginalProviderEnum? originalProvider = default, string originalProviderId = default, string plainContent = default, string providerSourceId = default, string receivedTime = default, string sentFromAddress = default, string sentFromReplyAddress = default, string sentTime = default, string sentToAddress = default, List<string> sentToBccAddressList = default, List<string> sentToCcAddressList = default, string subject = default)
        {
            // to ensure "sentToAddress" is required (not null)
            if (sentToAddress == null)
            {
                throw new ArgumentNullException("sentToAddress is a required property for CreateEmailSentRequest and cannot be null");
            }
            this.SentToAddress = sentToAddress;
            this.ClickedTime = clickedTime;
            this.ContactId = contactId;
            this.Headers = headers;
            this.HtmlContent = htmlContent;
            this.OpenedTime = openedTime;
            this.OriginalProvider = originalProvider;
            this.OriginalProviderId = originalProviderId;
            this.PlainContent = plainContent;
            this.ProviderSourceId = providerSourceId;
            this.ReceivedTime = receivedTime;
            this.SentFromAddress = sentFromAddress;
            this.SentFromReplyAddress = sentFromReplyAddress;
            this.SentTime = sentTime;
            this.SentToBccAddressList = sentToBccAddressList;
            this.SentToCcAddressList = sentToCcAddressList;
            this.Subject = subject;
        }

        /// <summary>
        /// Gets or Sets ClickedTime
        /// </summary>
        [DataMember(Name = "clicked_time", EmitDefaultValue = false)]
        public string ClickedTime { get; set; }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// Gets or Sets Headers
        /// </summary>
        [DataMember(Name = "headers", EmitDefaultValue = false)]
        public string Headers { get; set; }

        /// <summary>
        /// Base64 encoded HTML
        /// </summary>
        /// <value>Base64 encoded HTML</value>
        [DataMember(Name = "html_content", EmitDefaultValue = false)]
        public string HtmlContent { get; set; }

        /// <summary>
        /// Gets or Sets OpenedTime
        /// </summary>
        [DataMember(Name = "opened_time", EmitDefaultValue = false)]
        public string OpenedTime { get; set; }

        /// <summary>
        /// Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.
        /// </summary>
        /// <value>Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.</value>
        [DataMember(Name = "original_provider_id", EmitDefaultValue = false)]
        public string OriginalProviderId { get; set; }

        /// <summary>
        /// Base64 encoded text
        /// </summary>
        /// <value>Base64 encoded text</value>
        [DataMember(Name = "plain_content", EmitDefaultValue = false)]
        public string PlainContent { get; set; }

        /// <summary>
        /// The email address of the synced email account that generated this message.
        /// </summary>
        /// <value>The email address of the synced email account that generated this message.</value>
        [DataMember(Name = "provider_source_id", EmitDefaultValue = false)]
        public string ProviderSourceId { get; set; }

        /// <summary>
        /// Gets or Sets ReceivedTime
        /// </summary>
        [DataMember(Name = "received_time", EmitDefaultValue = false)]
        public string ReceivedTime { get; set; }

        /// <summary>
        /// Gets or Sets SentFromAddress
        /// </summary>
        [DataMember(Name = "sent_from_address", EmitDefaultValue = false)]
        public string SentFromAddress { get; set; }

        /// <summary>
        /// Gets or Sets SentFromReplyAddress
        /// </summary>
        [DataMember(Name = "sent_from_reply_address", EmitDefaultValue = false)]
        public string SentFromReplyAddress { get; set; }

        /// <summary>
        /// Gets or Sets SentTime
        /// </summary>
        [DataMember(Name = "sent_time", EmitDefaultValue = false)]
        public string SentTime { get; set; }

        /// <summary>
        /// Gets or Sets SentToAddress
        /// </summary>
        [DataMember(Name = "sent_to_address", IsRequired = true, EmitDefaultValue = true)]
        public string SentToAddress { get; set; }

        /// <summary>
        /// Gets or Sets SentToBccAddressList
        /// </summary>
        [DataMember(Name = "sent_to_bcc_address_list", EmitDefaultValue = false)]
        public List<string> SentToBccAddressList { get; set; }

        /// <summary>
        /// Gets or Sets SentToCcAddressList
        /// </summary>
        [DataMember(Name = "sent_to_cc_address_list", EmitDefaultValue = false)]
        public List<string> SentToCcAddressList { get; set; }

        /// <summary>
        /// Gets or Sets Subject
        /// </summary>
        [DataMember(Name = "subject", EmitDefaultValue = false)]
        public string Subject { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateEmailSentRequest {\n");
            sb.Append("  ClickedTime: ").Append(ClickedTime).Append("\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  Headers: ").Append(Headers).Append("\n");
            sb.Append("  HtmlContent: ").Append(HtmlContent).Append("\n");
            sb.Append("  OpenedTime: ").Append(OpenedTime).Append("\n");
            sb.Append("  OriginalProvider: ").Append(OriginalProvider).Append("\n");
            sb.Append("  OriginalProviderId: ").Append(OriginalProviderId).Append("\n");
            sb.Append("  PlainContent: ").Append(PlainContent).Append("\n");
            sb.Append("  ProviderSourceId: ").Append(ProviderSourceId).Append("\n");
            sb.Append("  ReceivedTime: ").Append(ReceivedTime).Append("\n");
            sb.Append("  SentFromAddress: ").Append(SentFromAddress).Append("\n");
            sb.Append("  SentFromReplyAddress: ").Append(SentFromReplyAddress).Append("\n");
            sb.Append("  SentTime: ").Append(SentTime).Append("\n");
            sb.Append("  SentToAddress: ").Append(SentToAddress).Append("\n");
            sb.Append("  SentToBccAddressList: ").Append(SentToBccAddressList).Append("\n");
            sb.Append("  SentToCcAddressList: ").Append(SentToCcAddressList).Append("\n");
            sb.Append("  Subject: ").Append(Subject).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }    }

}
