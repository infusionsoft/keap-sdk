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
    /// Discount
    /// </summary>
    [DataContract(Name = "Discount")]
    public partial class Discount : IValidatableObject
    {
        /// <summary>
        /// Defines DiscountMethod
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum DiscountMethodEnum
        {
            /// <summary>
            /// Enum AMOUNT for value: AMOUNT
            /// </summary>
            [EnumMember(Value = "AMOUNT")]
            AMOUNT = 1,

            /// <summary>
            /// Enum PERCENT for value: PERCENT
            /// </summary>
            [EnumMember(Value = "PERCENT")]
            PERCENT = 2
        }

        /// <summary>
        /// Gets or Sets DiscountMethod
        /// </summary>
        [DataMember(Name = "discount_method", IsRequired = true, EmitDefaultValue = true)]
        public DiscountMethodEnum DiscountMethod { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Discount" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Discount() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Discount" /> class.
        /// </summary>
        /// <param name="amount">amount (required).</param>
        /// <param name="discountMethod">discountMethod (required).</param>
        /// <param name="lineItemId">lineItemId.</param>
        /// <param name="specialItemId">specialItemId (required).</param>
        public Discount(double amount = default, DiscountMethodEnum discountMethod = default, string lineItemId = default, string specialItemId = default)
        {
            this.Amount = amount;
            this.DiscountMethod = discountMethod;
            // to ensure "specialItemId" is required (not null)
            if (specialItemId == null)
            {
                throw new ArgumentNullException("specialItemId is a required property for Discount and cannot be null");
            }
            this.SpecialItemId = specialItemId;
            this.LineItemId = lineItemId;
        }

        /// <summary>
        /// Gets or Sets Amount
        /// </summary>
        [DataMember(Name = "amount", IsRequired = true, EmitDefaultValue = true)]
        public double Amount { get; set; }

        /// <summary>
        /// Gets or Sets LineItemId
        /// </summary>
        [DataMember(Name = "line_item_id", EmitDefaultValue = false)]
        public string LineItemId { get; set; }

        /// <summary>
        /// Gets or Sets SpecialItemId
        /// </summary>
        [DataMember(Name = "special_item_id", IsRequired = true, EmitDefaultValue = true)]
        public string SpecialItemId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Discount {\n");
            sb.Append("  Amount: ").Append(Amount).Append("\n");
            sb.Append("  DiscountMethod: ").Append(DiscountMethod).Append("\n");
            sb.Append("  LineItemId: ").Append(LineItemId).Append("\n");
            sb.Append("  SpecialItemId: ").Append(SpecialItemId).Append("\n");
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
