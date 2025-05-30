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
    /// UpdateAffiliateRequest
    /// </summary>
    [DataContract(Name = "UpdateAffiliateRequest")]
    public partial class UpdateAffiliateRequest : IValidatableObject
    {
        /// <summary>
        /// The Affiliate Status
        /// </summary>
        /// <value>The Affiliate Status</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum ACTIVE for value: ACTIVE
            /// </summary>
            [EnumMember(Value = "ACTIVE")]
            ACTIVE = 1,

            /// <summary>
            /// Enum INACTIVE for value: INACTIVE
            /// </summary>
            [EnumMember(Value = "INACTIVE")]
            INACTIVE = 2
        }

        /// <summary>
        /// The Affiliate Status
        /// </summary>
        /// <value>The Affiliate Status</value>
        /*
        <example>ACTIVE</example>
        */
        [DataMember(Name = "status", IsRequired = true, EmitDefaultValue = true)]
        public StatusEnum Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateAffiliateRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateAffiliateRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateAffiliateRequest" /> class.
        /// </summary>
        /// <param name="code">The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length (required).</param>
        /// <param name="contactId">The contactId identifier , Must be a positive number.</param>
        /// <param name="name">The Affiliate name will be derived from the Contact, when not explicitly provided.</param>
        /// <param name="status">The Affiliate Status (required).</param>
        public UpdateAffiliateRequest(string code = default, string contactId = default, string name = default, StatusEnum status = default)
        {
            // to ensure "code" is required (not null)
            if (code == null)
            {
                throw new ArgumentNullException("code is a required property for UpdateAffiliateRequest and cannot be null");
            }
            this.Code = code;
            this.Status = status;
            this.ContactId = contactId;
            this.Name = name;
        }

        /// <summary>
        /// The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length
        /// </summary>
        /// <value>The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length</value>
        /*
        <example>M123</example>
        */
        [DataMember(Name = "code", IsRequired = true, EmitDefaultValue = true)]
        public string Code { get; set; }

        /// <summary>
        /// The contactId identifier , Must be a positive number
        /// </summary>
        /// <value>The contactId identifier , Must be a positive number</value>
        /*
        <example>1</example>
        */
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// The Affiliate name will be derived from the Contact, when not explicitly provided
        /// </summary>
        /// <value>The Affiliate name will be derived from the Contact, when not explicitly provided</value>
        /*
        <example>Affiliate Name</example>
        */
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateAffiliateRequest {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
