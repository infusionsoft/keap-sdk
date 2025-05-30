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
 * FaxNumber
 */
@JsonPropertyOrder({
  FaxNumber.JSON_PROPERTY_FIELD,
  FaxNumber.JSON_PROPERTY_NUMBER,
  FaxNumber.JSON_PROPERTY_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class FaxNumber implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * Gets or Sets field
   */
  public enum FieldEnum {
    FAX_NUMBER_FIELD_UNSPECIFIED(String.valueOf("FAX_NUMBER_FIELD_UNSPECIFIED")),
    
    FAX1(String.valueOf("FAX1")),
    
    FAX2(String.valueOf("FAX2")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    FieldEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static FieldEnum fromValue(String value) {
      for (FieldEnum b : FieldEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_FIELD = "field";
  @jakarta.annotation.Nullable  private FieldEnum field;

  public static final String JSON_PROPERTY_NUMBER = "number";
  @jakarta.annotation.Nullable  private String number;

  public static final String JSON_PROPERTY_TYPE = "type";
  @jakarta.annotation.Nullable  private String type;

  public FaxNumber() { 
  }

  public FaxNumber field(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
    return this;
  }

  /**
   * Get field
   * @return field
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public FieldEnum getField() {
    return field;
  }


  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setField(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
  }


  public FaxNumber number(@jakarta.annotation.Nullable String number) {
    this.number = number;
    return this;
  }

  /**
   * Get number
   * @return number
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNumber() {
    return number;
  }


  @JsonProperty(JSON_PROPERTY_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNumber(@jakarta.annotation.Nullable String number) {
    this.number = number;
  }


  public FaxNumber type(@jakarta.annotation.Nullable String type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(@jakarta.annotation.Nullable String type) {
    this.type = type;
  }

  /**
   * Return true if this FaxNumber object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FaxNumber faxNumber = (FaxNumber) o;
    return Objects.equals(this.field, faxNumber.field) &&
        Objects.equals(this.number, faxNumber.number) &&
        Objects.equals(this.type, faxNumber.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(field, number, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FaxNumber {\n");
    sb.append("    field: ").append(toIndentedString(field)).append("\n");
    sb.append("    number: ").append(toIndentedString(number)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
    
        private FaxNumber instance;
    
        public Builder() {
          this(new FaxNumber());
        }
    
        protected Builder(FaxNumber instance) {
          this.instance = instance;
        }
    
        public FaxNumber.Builder field(FieldEnum field) {
              this.instance.field = field;
          return this;
        }
            public FaxNumber.Builder number(String number) {
              this.instance.number = number;
          return this;
        }
            public FaxNumber.Builder type(String type) {
              this.instance.type = type;
          return this;
        }
        
    
        /**
        * returns a built FaxNumber instance.
        *
        * The builder is not reusable.
        */
        public FaxNumber build() {
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
      public static FaxNumber.Builder builder() {
        return new FaxNumber.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public FaxNumber.Builder toBuilder() {
        return new FaxNumber.Builder()
          .field(getField())
          .number(getNumber())
          .type(getType());
      }
}

