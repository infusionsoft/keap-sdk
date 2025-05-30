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
    /// RestProductOption
    /// </summary>
    [DataContract(Name = "RestProductOption")]
    public partial class RestProductOption : IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum FIXED for value: FIXED
            /// </summary>
            [EnumMember(Value = "FIXED")]
            FIXED = 1,

            /// <summary>
            /// Enum VARIABLE for value: VARIABLE
            /// </summary>
            [EnumMember(Value = "VARIABLE")]
            VARIABLE = 2
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestProductOption" /> class.
        /// </summary>
        /// <param name="allowSpaces">allowSpaces.</param>
        /// <param name="canContainCharacter">canContainCharacter.</param>
        /// <param name="canContainNumber">canContainNumber.</param>
        /// <param name="canEndWithCharacter">canEndWithCharacter.</param>
        /// <param name="canEndWithNumber">canEndWithNumber.</param>
        /// <param name="canStartWithCharacter">canStartWithCharacter.</param>
        /// <param name="canStartWithNumber">canStartWithNumber.</param>
        /// <param name="displayIndex">displayIndex.</param>
        /// <param name="id">id.</param>
        /// <param name="label">label.</param>
        /// <param name="maxChars">maxChars.</param>
        /// <param name="minChars">minChars.</param>
        /// <param name="name">name.</param>
        /// <param name="required">required.</param>
        /// <param name="textMessage">textMessage.</param>
        /// <param name="type">type.</param>
        /// <param name="values">values.</param>
        public RestProductOption(bool allowSpaces = default, bool canContainCharacter = default, bool canContainNumber = default, bool canEndWithCharacter = default, bool canEndWithNumber = default, bool canStartWithCharacter = default, bool canStartWithNumber = default, int displayIndex = default, string id = default, string label = default, int maxChars = default, int minChars = default, string name = default, bool required = default, string textMessage = default, TypeEnum? type = default, List<RestProductOptionValue> values = default)
        {
            this.AllowSpaces = allowSpaces;
            this.CanContainCharacter = canContainCharacter;
            this.CanContainNumber = canContainNumber;
            this.CanEndWithCharacter = canEndWithCharacter;
            this.CanEndWithNumber = canEndWithNumber;
            this.CanStartWithCharacter = canStartWithCharacter;
            this.CanStartWithNumber = canStartWithNumber;
            this.DisplayIndex = displayIndex;
            this.Id = id;
            this.Label = label;
            this.MaxChars = maxChars;
            this.MinChars = minChars;
            this.Name = name;
            this.Required = required;
            this.TextMessage = textMessage;
            this.Type = type;
            this.Values = values;
        }

        /// <summary>
        /// Gets or Sets AllowSpaces
        /// </summary>
        [DataMember(Name = "allow_spaces", EmitDefaultValue = true)]
        public bool AllowSpaces { get; set; }

        /// <summary>
        /// Gets or Sets CanContainCharacter
        /// </summary>
        [DataMember(Name = "can_contain_character", EmitDefaultValue = true)]
        public bool CanContainCharacter { get; set; }

        /// <summary>
        /// Gets or Sets CanContainNumber
        /// </summary>
        [DataMember(Name = "can_contain_number", EmitDefaultValue = true)]
        public bool CanContainNumber { get; set; }

        /// <summary>
        /// Gets or Sets CanEndWithCharacter
        /// </summary>
        [DataMember(Name = "can_end_with_character", EmitDefaultValue = true)]
        public bool CanEndWithCharacter { get; set; }

        /// <summary>
        /// Gets or Sets CanEndWithNumber
        /// </summary>
        [DataMember(Name = "can_end_with_number", EmitDefaultValue = true)]
        public bool CanEndWithNumber { get; set; }

        /// <summary>
        /// Gets or Sets CanStartWithCharacter
        /// </summary>
        [DataMember(Name = "can_start_with_character", EmitDefaultValue = true)]
        public bool CanStartWithCharacter { get; set; }

        /// <summary>
        /// Gets or Sets CanStartWithNumber
        /// </summary>
        [DataMember(Name = "can_start_with_number", EmitDefaultValue = true)]
        public bool CanStartWithNumber { get; set; }

        /// <summary>
        /// Gets or Sets DisplayIndex
        /// </summary>
        [DataMember(Name = "display_index", EmitDefaultValue = false)]
        public int DisplayIndex { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Label
        /// </summary>
        [DataMember(Name = "label", EmitDefaultValue = false)]
        public string Label { get; set; }

        /// <summary>
        /// Gets or Sets MaxChars
        /// </summary>
        [DataMember(Name = "max_chars", EmitDefaultValue = false)]
        public int MaxChars { get; set; }

        /// <summary>
        /// Gets or Sets MinChars
        /// </summary>
        [DataMember(Name = "min_chars", EmitDefaultValue = false)]
        public int MinChars { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Required
        /// </summary>
        [DataMember(Name = "required", EmitDefaultValue = true)]
        public bool Required { get; set; }

        /// <summary>
        /// Gets or Sets TextMessage
        /// </summary>
        [DataMember(Name = "text_message", EmitDefaultValue = false)]
        public string TextMessage { get; set; }

        /// <summary>
        /// Gets or Sets Values
        /// </summary>
        [DataMember(Name = "values", EmitDefaultValue = false)]
        public List<RestProductOptionValue> Values { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestProductOption {\n");
            sb.Append("  AllowSpaces: ").Append(AllowSpaces).Append("\n");
            sb.Append("  CanContainCharacter: ").Append(CanContainCharacter).Append("\n");
            sb.Append("  CanContainNumber: ").Append(CanContainNumber).Append("\n");
            sb.Append("  CanEndWithCharacter: ").Append(CanEndWithCharacter).Append("\n");
            sb.Append("  CanEndWithNumber: ").Append(CanEndWithNumber).Append("\n");
            sb.Append("  CanStartWithCharacter: ").Append(CanStartWithCharacter).Append("\n");
            sb.Append("  CanStartWithNumber: ").Append(CanStartWithNumber).Append("\n");
            sb.Append("  DisplayIndex: ").Append(DisplayIndex).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
            sb.Append("  MaxChars: ").Append(MaxChars).Append("\n");
            sb.Append("  MinChars: ").Append(MinChars).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Required: ").Append(Required).Append("\n");
            sb.Append("  TextMessage: ").Append(TextMessage).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Values: ").Append(Values).Append("\n");
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
