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
    /// EmailAddress
    /// </summary>
    [DataContract(Name = "EmailAddress")]
    public partial class EmailAddress : IValidatableObject
    {
        /// <summary>
        /// Defines EmailOptStatus
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum EmailOptStatusEnum
        {
            /// <summary>
            /// Enum UNENGAGEDMARKETABLE for value: UNENGAGED_MARKETABLE
            /// </summary>
            [EnumMember(Value = "UNENGAGED_MARKETABLE")]
            UNENGAGEDMARKETABLE = 1,

            /// <summary>
            /// Enum SINGLEOPTIN for value: SINGLE_OPT_IN
            /// </summary>
            [EnumMember(Value = "SINGLE_OPT_IN")]
            SINGLEOPTIN = 2,

            /// <summary>
            /// Enum DOUBLEOPTIN for value: DOUBLE_OPT_IN
            /// </summary>
            [EnumMember(Value = "DOUBLE_OPT_IN")]
            DOUBLEOPTIN = 3,

            /// <summary>
            /// Enum CONFIRMED for value: CONFIRMED
            /// </summary>
            [EnumMember(Value = "CONFIRMED")]
            CONFIRMED = 4,

            /// <summary>
            /// Enum UNENGAGEDNONMARKETABLE for value: UNENGAGED_NON_MARKETABLE
            /// </summary>
            [EnumMember(Value = "UNENGAGED_NON_MARKETABLE")]
            UNENGAGEDNONMARKETABLE = 5,

            /// <summary>
            /// Enum NONMARKETABLE for value: NON_MARKETABLE
            /// </summary>
            [EnumMember(Value = "NON_MARKETABLE")]
            NONMARKETABLE = 6,

            /// <summary>
            /// Enum LOCKDOWN for value: LOCKDOWN
            /// </summary>
            [EnumMember(Value = "LOCKDOWN")]
            LOCKDOWN = 7,

            /// <summary>
            /// Enum BOUNCE for value: BOUNCE
            /// </summary>
            [EnumMember(Value = "BOUNCE")]
            BOUNCE = 8,

            /// <summary>
            /// Enum HARDBOUNCE for value: HARD_BOUNCE
            /// </summary>
            [EnumMember(Value = "HARD_BOUNCE")]
            HARDBOUNCE = 9,

            /// <summary>
            /// Enum MANUAL for value: MANUAL
            /// </summary>
            [EnumMember(Value = "MANUAL")]
            MANUAL = 10,

            /// <summary>
            /// Enum ADMIN for value: ADMIN
            /// </summary>
            [EnumMember(Value = "ADMIN")]
            ADMIN = 11,

            /// <summary>
            /// Enum SYSTEM for value: SYSTEM
            /// </summary>
            [EnumMember(Value = "SYSTEM")]
            SYSTEM = 12,

            /// <summary>
            /// Enum LISTUNSUBSCRIBE for value: LIST_UNSUBSCRIBE
            /// </summary>
            [EnumMember(Value = "LIST_UNSUBSCRIBE")]
            LISTUNSUBSCRIBE = 13,

            /// <summary>
            /// Enum FEEDBACK for value: FEEDBACK
            /// </summary>
            [EnumMember(Value = "FEEDBACK")]
            FEEDBACK = 14,

            /// <summary>
            /// Enum SPAM for value: SPAM
            /// </summary>
            [EnumMember(Value = "SPAM")]
            SPAM = 15,

            /// <summary>
            /// Enum INVALID for value: INVALID
            /// </summary>
            [EnumMember(Value = "INVALID")]
            INVALID = 16,

            /// <summary>
            /// Enum DEACTIVATED for value: DEACTIVATED
            /// </summary>
            [EnumMember(Value = "DEACTIVATED")]
            DEACTIVATED = 17
        }

        /// <summary>
        /// Gets or Sets EmailOptStatus
        /// </summary>
        [DataMember(Name = "email_opt_status", EmitDefaultValue = false)]
        public EmailOptStatusEnum? EmailOptStatus { get; set; }
        /// <summary>
        /// Defines Field
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FieldEnum
        {
            /// <summary>
            /// Enum EMAILFIELDUNSPECIFIED for value: EMAIL_FIELD_UNSPECIFIED
            /// </summary>
            [EnumMember(Value = "EMAIL_FIELD_UNSPECIFIED")]
            EMAILFIELDUNSPECIFIED = 1,

            /// <summary>
            /// Enum EMAIL1 for value: EMAIL1
            /// </summary>
            [EnumMember(Value = "EMAIL1")]
            EMAIL1 = 2,

            /// <summary>
            /// Enum EMAIL2 for value: EMAIL2
            /// </summary>
            [EnumMember(Value = "EMAIL2")]
            EMAIL2 = 3,

            /// <summary>
            /// Enum EMAIL3 for value: EMAIL3
            /// </summary>
            [EnumMember(Value = "EMAIL3")]
            EMAIL3 = 4
        }

        /// <summary>
        /// Gets or Sets Field
        /// </summary>
        [DataMember(Name = "field", EmitDefaultValue = false)]
        public FieldEnum? Field { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="EmailAddress" /> class.
        /// </summary>
        /// <param name="email">email.</param>
        /// <param name="emailOptStatus">emailOptStatus.</param>
        /// <param name="field">field.</param>
        /// <param name="isOptIn">isOptIn.</param>
        /// <param name="optInReason">optInReason.</param>
        public EmailAddress(string email = default, EmailOptStatusEnum? emailOptStatus = default, FieldEnum? field = default, bool isOptIn = default, string optInReason = default)
        {
            this.Email = email;
            this.EmailOptStatus = emailOptStatus;
            this.Field = field;
            this.IsOptIn = isOptIn;
            this.OptInReason = optInReason;
        }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets IsOptIn
        /// </summary>
        [DataMember(Name = "is_opt_in", EmitDefaultValue = true)]
        public bool IsOptIn { get; set; }

        /// <summary>
        /// Gets or Sets OptInReason
        /// </summary>
        [DataMember(Name = "opt_in_reason", EmitDefaultValue = false)]
        public string OptInReason { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EmailAddress {\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  EmailOptStatus: ").Append(EmailOptStatus).Append("\n");
            sb.Append("  Field: ").Append(Field).Append("\n");
            sb.Append("  IsOptIn: ").Append(IsOptIn).Append("\n");
            sb.Append("  OptInReason: ").Append(OptInReason).Append("\n");
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
