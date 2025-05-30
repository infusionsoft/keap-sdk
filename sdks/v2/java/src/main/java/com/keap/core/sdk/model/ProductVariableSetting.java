/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

import java.util.Objects;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ProductVariableSetting
 */
@JsonPropertyOrder({
  ProductVariableSetting.JSON_PROPERTY_CONTAIN_SPACES,
  ProductVariableSetting.JSON_PROPERTY_CONTAINS,
  ProductVariableSetting.JSON_PROPERTY_END_WITH,
  ProductVariableSetting.JSON_PROPERTY_MAX_CHARS,
  ProductVariableSetting.JSON_PROPERTY_MIN_CHARS,
  ProductVariableSetting.JSON_PROPERTY_START_WITH,
  ProductVariableSetting.JSON_PROPERTY_VALIDATION_MSG
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ProductVariableSetting implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CONTAIN_SPACES = "contain_spaces";
  @jakarta.annotation.Nullable  private Boolean containSpaces;

  public static final String JSON_PROPERTY_CONTAINS = "contains";
  @jakarta.annotation.Nullable  private String contains;

  public static final String JSON_PROPERTY_END_WITH = "end_with";
  @jakarta.annotation.Nullable  private String endWith;

  public static final String JSON_PROPERTY_MAX_CHARS = "max_chars";
  @jakarta.annotation.Nullable  private Integer maxChars;

  public static final String JSON_PROPERTY_MIN_CHARS = "min_chars";
  @jakarta.annotation.Nullable  private Integer minChars;

  public static final String JSON_PROPERTY_START_WITH = "start_with";
  @jakarta.annotation.Nullable  private String startWith;

  public static final String JSON_PROPERTY_VALIDATION_MSG = "validation_msg";
  @jakarta.annotation.Nullable  private String validationMsg;

  public ProductVariableSetting() { 
  }

  public ProductVariableSetting containSpaces(@jakarta.annotation.Nullable Boolean containSpaces) {
    this.containSpaces = containSpaces;
    return this;
  }

  /**
   * If spaces are allowed for the option
   * @return containSpaces
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "If spaces are allowed for the option")
  @JsonProperty(JSON_PROPERTY_CONTAIN_SPACES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getContainSpaces() {
    return containSpaces;
  }


  @JsonProperty(JSON_PROPERTY_CONTAIN_SPACES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContainSpaces(@jakarta.annotation.Nullable Boolean containSpaces) {
    this.containSpaces = containSpaces;
  }


  public ProductVariableSetting contains(@jakarta.annotation.Nullable String contains) {
    this.contains = contains;
    return this;
  }

  /**
   * Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH.
   * @return contains
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH.")
  @JsonProperty(JSON_PROPERTY_CONTAINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContains() {
    return contains;
  }


  @JsonProperty(JSON_PROPERTY_CONTAINS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContains(@jakarta.annotation.Nullable String contains) {
    this.contains = contains;
  }


  public ProductVariableSetting endWith(@jakarta.annotation.Nullable String endWith) {
    this.endWith = endWith;
    return this;
  }

  /**
   * Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH.
   * @return endWith
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH.")
  @JsonProperty(JSON_PROPERTY_END_WITH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getEndWith() {
    return endWith;
  }


  @JsonProperty(JSON_PROPERTY_END_WITH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndWith(@jakarta.annotation.Nullable String endWith) {
    this.endWith = endWith;
  }


  public ProductVariableSetting maxChars(@jakarta.annotation.Nullable Integer maxChars) {
    this.maxChars = maxChars;
    return this;
  }

  /**
   * Max allowable chars. Its value must be greater than min_chars
   * @return maxChars
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Max allowable chars. Its value must be greater than min_chars")
  @JsonProperty(JSON_PROPERTY_MAX_CHARS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getMaxChars() {
    return maxChars;
  }


  @JsonProperty(JSON_PROPERTY_MAX_CHARS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaxChars(@jakarta.annotation.Nullable Integer maxChars) {
    this.maxChars = maxChars;
  }


  public ProductVariableSetting minChars(@jakarta.annotation.Nullable Integer minChars) {
    this.minChars = minChars;
    return this;
  }

  /**
   * Minimum allowable characters
   * @return minChars
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Minimum allowable characters")
  @JsonProperty(JSON_PROPERTY_MIN_CHARS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getMinChars() {
    return minChars;
  }


  @JsonProperty(JSON_PROPERTY_MIN_CHARS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinChars(@jakarta.annotation.Nullable Integer minChars) {
    this.minChars = minChars;
  }


  public ProductVariableSetting startWith(@jakarta.annotation.Nullable String startWith) {
    this.startWith = startWith;
    return this;
  }

  /**
   * Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH.
   * @return startWith
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH.")
  @JsonProperty(JSON_PROPERTY_START_WITH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getStartWith() {
    return startWith;
  }


  @JsonProperty(JSON_PROPERTY_START_WITH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStartWith(@jakarta.annotation.Nullable String startWith) {
    this.startWith = startWith;
  }


  public ProductVariableSetting validationMsg(@jakarta.annotation.Nullable String validationMsg) {
    this.validationMsg = validationMsg;
    return this;
  }

  /**
   * Customized validation message to display when option criteria aren’t met
   * @return validationMsg
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "Customized validation message to display when option criteria aren’t met")
  @JsonProperty(JSON_PROPERTY_VALIDATION_MSG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getValidationMsg() {
    return validationMsg;
  }


  @JsonProperty(JSON_PROPERTY_VALIDATION_MSG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValidationMsg(@jakarta.annotation.Nullable String validationMsg) {
    this.validationMsg = validationMsg;
  }

  /**
   * Return true if this ProductVariableSetting object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductVariableSetting productVariableSetting = (ProductVariableSetting) o;
    return Objects.equals(this.containSpaces, productVariableSetting.containSpaces) &&
        Objects.equals(this.contains, productVariableSetting.contains) &&
        Objects.equals(this.endWith, productVariableSetting.endWith) &&
        Objects.equals(this.maxChars, productVariableSetting.maxChars) &&
        Objects.equals(this.minChars, productVariableSetting.minChars) &&
        Objects.equals(this.startWith, productVariableSetting.startWith) &&
        Objects.equals(this.validationMsg, productVariableSetting.validationMsg);
  }

  @Override
  public int hashCode() {
    return Objects.hash(containSpaces, contains, endWith, maxChars, minChars, startWith, validationMsg);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductVariableSetting {\n");
    sb.append("    containSpaces: ").append(toIndentedString(containSpaces)).append("\n");
    sb.append("    contains: ").append(toIndentedString(contains)).append("\n");
    sb.append("    endWith: ").append(toIndentedString(endWith)).append("\n");
    sb.append("    maxChars: ").append(toIndentedString(maxChars)).append("\n");
    sb.append("    minChars: ").append(toIndentedString(minChars)).append("\n");
    sb.append("    startWith: ").append(toIndentedString(startWith)).append("\n");
    sb.append("    validationMsg: ").append(toIndentedString(validationMsg)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

    public static class Builder {
    
        private ProductVariableSetting instance;
    
        public Builder() {
          this(new ProductVariableSetting());
        }
    
        protected Builder(ProductVariableSetting instance) {
          this.instance = instance;
        }
    
        public ProductVariableSetting.Builder containSpaces(Boolean containSpaces) {
              this.instance.containSpaces = containSpaces;
          return this;
        }
            public ProductVariableSetting.Builder contains(String contains) {
              this.instance.contains = contains;
          return this;
        }
            public ProductVariableSetting.Builder endWith(String endWith) {
              this.instance.endWith = endWith;
          return this;
        }
            public ProductVariableSetting.Builder maxChars(Integer maxChars) {
              this.instance.maxChars = maxChars;
          return this;
        }
            public ProductVariableSetting.Builder minChars(Integer minChars) {
              this.instance.minChars = minChars;
          return this;
        }
            public ProductVariableSetting.Builder startWith(String startWith) {
              this.instance.startWith = startWith;
          return this;
        }
            public ProductVariableSetting.Builder validationMsg(String validationMsg) {
              this.instance.validationMsg = validationMsg;
          return this;
        }
        
    
        /**
        * returns a built ProductVariableSetting instance.
        *
        * The builder is not reusable.
        */
        public ProductVariableSetting build() {
          try {
            return this.instance;
          } finally {
            // ensure that this.instance is not reused
            this.instance = null;
          }
        }
    
        @Override
        public String toString() {
          return getClass() + "=(" + instance + ")";
        }
      }
    
      /**
      * Create a builder with no initialized field.
      */
      public static ProductVariableSetting.Builder builder() {
        return new ProductVariableSetting.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ProductVariableSetting.Builder toBuilder() {
        return new ProductVariableSetting.Builder()
          .containSpaces(getContainSpaces())
          .contains(getContains())
          .endWith(getEndWith())
          .maxChars(getMaxChars())
          .minChars(getMinChars())
          .startWith(getStartWith())
          .validationMsg(getValidationMsg());
      }
}

