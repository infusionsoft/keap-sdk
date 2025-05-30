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
    /// ProductVariableSetting
    /// </summary>
    [DataContract(Name = "ProductVariableSetting")]
    public partial class ProductVariableSetting : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductVariableSetting" /> class.
        /// </summary>
        /// <param name="containSpaces">If spaces are allowed for the option.</param>
        /// <param name="contains">Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH..</param>
        /// <param name="endWith">Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH..</param>
        /// <param name="maxChars">Max allowable chars. Its value must be greater than min_chars.</param>
        /// <param name="minChars">Minimum allowable characters.</param>
        /// <param name="startWith">Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH..</param>
        /// <param name="validationMsg">Customized validation message to display when option criteria aren’t met.</param>
        public ProductVariableSetting(bool containSpaces = default, string contains = default, string endWith = default, int maxChars = default, int minChars = default, string startWith = default, string validationMsg = default)
        {
            this.ContainSpaces = containSpaces;
            this.Contains = contains;
            this.EndWith = endWith;
            this.MaxChars = maxChars;
            this.MinChars = minChars;
            this.StartWith = startWith;
            this.ValidationMsg = validationMsg;
        }

        /// <summary>
        /// If spaces are allowed for the option
        /// </summary>
        /// <value>If spaces are allowed for the option</value>
        [DataMember(Name = "contain_spaces", EmitDefaultValue = true)]
        public bool ContainSpaces { get; set; }

        /// <summary>
        /// Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH.
        /// </summary>
        /// <value>Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH.</value>
        [DataMember(Name = "contains", EmitDefaultValue = false)]
        public string Contains { get; set; }

        /// <summary>
        /// Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH.
        /// </summary>
        /// <value>Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH.</value>
        [DataMember(Name = "end_with", EmitDefaultValue = false)]
        public string EndWith { get; set; }

        /// <summary>
        /// Max allowable chars. Its value must be greater than min_chars
        /// </summary>
        /// <value>Max allowable chars. Its value must be greater than min_chars</value>
        [DataMember(Name = "max_chars", EmitDefaultValue = false)]
        public int MaxChars { get; set; }

        /// <summary>
        /// Minimum allowable characters
        /// </summary>
        /// <value>Minimum allowable characters</value>
        [DataMember(Name = "min_chars", EmitDefaultValue = false)]
        public int MinChars { get; set; }

        /// <summary>
        /// Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH.
        /// </summary>
        /// <value>Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH.</value>
        [DataMember(Name = "start_with", EmitDefaultValue = false)]
        public string StartWith { get; set; }

        /// <summary>
        /// Customized validation message to display when option criteria aren’t met
        /// </summary>
        /// <value>Customized validation message to display when option criteria aren’t met</value>
        [DataMember(Name = "validation_msg", EmitDefaultValue = false)]
        public string ValidationMsg { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductVariableSetting {\n");
            sb.Append("  ContainSpaces: ").Append(ContainSpaces).Append("\n");
            sb.Append("  Contains: ").Append(Contains).Append("\n");
            sb.Append("  EndWith: ").Append(EndWith).Append("\n");
            sb.Append("  MaxChars: ").Append(MaxChars).Append("\n");
            sb.Append("  MinChars: ").Append(MinChars).Append("\n");
            sb.Append("  StartWith: ").Append(StartWith).Append("\n");
            sb.Append("  ValidationMsg: ").Append(ValidationMsg).Append("\n");
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
