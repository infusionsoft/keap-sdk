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
import com.keap.core.sdk.model.PipelineCustomFieldType;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * Class representing the type of an array property in a custom field.
 */
@Schema(description = "Class representing the type of an array property in a custom field.")
@JsonPropertyOrder({
  PipelineCustomFieldArrayPropertyType.JSON_PROPERTY_LIST_TYPE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class PipelineCustomFieldArrayPropertyType implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LIST_TYPE = "list_type";
  @jakarta.annotation.Nonnull  private PipelineCustomFieldType listType;

  public PipelineCustomFieldArrayPropertyType() { 
  }

  public PipelineCustomFieldArrayPropertyType listType(@jakarta.annotation.Nonnull PipelineCustomFieldType listType) {
    this.listType = listType;
    return this;
  }

  /**
   * The type of the list contained in the array property. This field is required.
   * @return listType
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The type of the list contained in the array property. This field is required.")
  @JsonProperty(JSON_PROPERTY_LIST_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public PipelineCustomFieldType getListType() {
    return listType;
  }


  @JsonProperty(JSON_PROPERTY_LIST_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setListType(@jakarta.annotation.Nonnull PipelineCustomFieldType listType) {
    this.listType = listType;
  }

  /**
   * Return true if this PipelineCustomFieldArrayPropertyType object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PipelineCustomFieldArrayPropertyType pipelineCustomFieldArrayPropertyType = (PipelineCustomFieldArrayPropertyType) o;
    return Objects.equals(this.listType, pipelineCustomFieldArrayPropertyType.listType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(listType);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PipelineCustomFieldArrayPropertyType {\n");
    sb.append("    listType: ").append(toIndentedString(listType)).append("\n");
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
    
        private PipelineCustomFieldArrayPropertyType instance;
    
        public Builder() {
          this(new PipelineCustomFieldArrayPropertyType());
        }
    
        protected Builder(PipelineCustomFieldArrayPropertyType instance) {
          this.instance = instance;
        }
    
        public PipelineCustomFieldArrayPropertyType.Builder listType(PipelineCustomFieldType listType) {
              this.instance.listType = listType;
          return this;
        }
        
    
        /**
        * returns a built PipelineCustomFieldArrayPropertyType instance.
        *
        * The builder is not reusable.
        */
        public PipelineCustomFieldArrayPropertyType build() {
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
      public static PipelineCustomFieldArrayPropertyType.Builder builder() {
        return new PipelineCustomFieldArrayPropertyType.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public PipelineCustomFieldArrayPropertyType.Builder toBuilder() {
        return new PipelineCustomFieldArrayPropertyType.Builder()
          .listType(getListType());
      }
}

