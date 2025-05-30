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
 * CreateProductCategoryRequest
 */
@JsonPropertyOrder({
  CreateProductCategoryRequest.JSON_PROPERTY_DISPLAY_ORDER_INDEX,
  CreateProductCategoryRequest.JSON_PROPERTY_NAME,
  CreateProductCategoryRequest.JSON_PROPERTY_PARENT_CATEGORY_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class CreateProductCategoryRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DISPLAY_ORDER_INDEX = "display_order_index";
  @jakarta.annotation.Nullable  private Integer displayOrderIndex;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nonnull  private String name;

  public static final String JSON_PROPERTY_PARENT_CATEGORY_ID = "parent_category_id";
  @jakarta.annotation.Nullable  private String parentCategoryId;

  public CreateProductCategoryRequest() { 
  }

  public CreateProductCategoryRequest displayOrderIndex(@jakarta.annotation.Nullable Integer displayOrderIndex) {
    this.displayOrderIndex = displayOrderIndex;
    return this;
  }

  /**
   * Get displayOrderIndex
   * @return displayOrderIndex
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISPLAY_ORDER_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getDisplayOrderIndex() {
    return displayOrderIndex;
  }


  @JsonProperty(JSON_PROPERTY_DISPLAY_ORDER_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDisplayOrderIndex(@jakarta.annotation.Nullable Integer displayOrderIndex) {
    this.displayOrderIndex = displayOrderIndex;
  }


  public CreateProductCategoryRequest name(@jakarta.annotation.Nonnull String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(@jakarta.annotation.Nonnull String name) {
    this.name = name;
  }


  public CreateProductCategoryRequest parentCategoryId(@jakarta.annotation.Nullable String parentCategoryId) {
    this.parentCategoryId = parentCategoryId;
    return this;
  }

  /**
   * Get parentCategoryId
   * @return parentCategoryId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PARENT_CATEGORY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getParentCategoryId() {
    return parentCategoryId;
  }


  @JsonProperty(JSON_PROPERTY_PARENT_CATEGORY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setParentCategoryId(@jakarta.annotation.Nullable String parentCategoryId) {
    this.parentCategoryId = parentCategoryId;
  }

  /**
   * Return true if this CreateProductCategoryRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateProductCategoryRequest createProductCategoryRequest = (CreateProductCategoryRequest) o;
    return Objects.equals(this.displayOrderIndex, createProductCategoryRequest.displayOrderIndex) &&
        Objects.equals(this.name, createProductCategoryRequest.name) &&
        Objects.equals(this.parentCategoryId, createProductCategoryRequest.parentCategoryId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(displayOrderIndex, name, parentCategoryId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateProductCategoryRequest {\n");
    sb.append("    displayOrderIndex: ").append(toIndentedString(displayOrderIndex)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    parentCategoryId: ").append(toIndentedString(parentCategoryId)).append("\n");
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
    
        private CreateProductCategoryRequest instance;
    
        public Builder() {
          this(new CreateProductCategoryRequest());
        }
    
        protected Builder(CreateProductCategoryRequest instance) {
          this.instance = instance;
        }
    
        public CreateProductCategoryRequest.Builder displayOrderIndex(Integer displayOrderIndex) {
              this.instance.displayOrderIndex = displayOrderIndex;
          return this;
        }
            public CreateProductCategoryRequest.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public CreateProductCategoryRequest.Builder parentCategoryId(String parentCategoryId) {
              this.instance.parentCategoryId = parentCategoryId;
          return this;
        }
        
    
        /**
        * returns a built CreateProductCategoryRequest instance.
        *
        * The builder is not reusable.
        */
        public CreateProductCategoryRequest build() {
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
      public static CreateProductCategoryRequest.Builder builder() {
        return new CreateProductCategoryRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CreateProductCategoryRequest.Builder toBuilder() {
        return new CreateProductCategoryRequest.Builder()
          .displayOrderIndex(getDisplayOrderIndex())
          .name(getName())
          .parentCategoryId(getParentCategoryId());
      }
}

