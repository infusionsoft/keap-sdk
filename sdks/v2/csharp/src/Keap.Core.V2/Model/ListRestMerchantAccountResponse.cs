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
    /// ListRestMerchantAccountResponse
    /// </summary>
    [DataContract(Name = "ListRestMerchantAccountResponse")]
    public partial class ListRestMerchantAccountResponse : IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum PAYPAL for value: PAYPAL
            /// </summary>
            [EnumMember(Value = "PAYPAL")]
            PAYPAL = 1,

            /// <summary>
            /// Enum UNSUPPORTED for value: UNSUPPORTED
            /// </summary>
            [EnumMember(Value = "UNSUPPORTED")]
            UNSUPPORTED = 2,

            /// <summary>
            /// Enum AUTHORIZE for value: AUTHORIZE
            /// </summary>
            [EnumMember(Value = "AUTHORIZE")]
            AUTHORIZE = 3,

            /// <summary>
            /// Enum EWAY for value: EWAY
            /// </summary>
            [EnumMember(Value = "EWAY")]
            EWAY = 4,

            /// <summary>
            /// Enum WEPAY for value: WEPAY
            /// </summary>
            [EnumMember(Value = "WEPAY")]
            WEPAY = 5,

            /// <summary>
            /// Enum STRIPE for value: STRIPE
            /// </summary>
            [EnumMember(Value = "STRIPE")]
            STRIPE = 6,

            /// <summary>
            /// Enum KEAPPAY for value: KEAP_PAY
            /// </summary>
            [EnumMember(Value = "KEAP_PAY")]
            KEAPPAY = 7
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ListRestMerchantAccountResponse" /> class.
        /// </summary>
        /// <param name="accountName">accountName.</param>
        /// <param name="id">id.</param>
        /// <param name="isTest">isTest.</param>
        /// <param name="type">type.</param>
        public ListRestMerchantAccountResponse(string accountName = default, string id = default, bool isTest = default, TypeEnum? type = default)
        {
            this.AccountName = accountName;
            this.Id = id;
            this.IsTest = isTest;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets AccountName
        /// </summary>
        [DataMember(Name = "account_name", EmitDefaultValue = false)]
        public string AccountName { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets IsTest
        /// </summary>
        [DataMember(Name = "is_test", EmitDefaultValue = true)]
        public bool IsTest { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListRestMerchantAccountResponse {\n");
            sb.Append("  AccountName: ").Append(AccountName).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  IsTest: ").Append(IsTest).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
