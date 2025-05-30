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
import com.keap.core.sdk.model.DiscountCriteria;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * CategoryDiscount
 */
@JsonPropertyOrder({
  CategoryDiscount.JSON_PROPERTY_APPLY_TO_COMMISSIONS,
  CategoryDiscount.JSON_PROPERTY_CRITERIA,
  CategoryDiscount.JSON_PROPERTY_DESCRIPTION,
  CategoryDiscount.JSON_PROPERTY_DISCOUNT_PERCENT,
  CategoryDiscount.JSON_PROPERTY_ID,
  CategoryDiscount.JSON_PROPERTY_NAME,
  CategoryDiscount.JSON_PROPERTY_PRODUCT_CATEGORIES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class CategoryDiscount implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_APPLY_TO_COMMISSIONS = "apply_to_commissions";
  @jakarta.annotation.Nullable  private Boolean applyToCommissions;

  public static final String JSON_PROPERTY_CRITERIA = "criteria";
  @jakarta.annotation.Nullable  private List<@Valid DiscountCriteria> criteria = new ArrayList<>();

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  @jakarta.annotation.Nullable  private String description;

  public static final String JSON_PROPERTY_DISCOUNT_PERCENT = "discount_percent";
  @jakarta.annotation.Nullable  private Double discountPercent;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  @jakarta.annotation.Nullable  private String name;

  public static final String JSON_PROPERTY_PRODUCT_CATEGORIES = "product_categories";
  @jakarta.annotation.Nullable  private List<String> productCategories = new ArrayList<>();

  public CategoryDiscount() { 
  }

  public CategoryDiscount applyToCommissions(@jakarta.annotation.Nullable Boolean applyToCommissions) {
    this.applyToCommissions = applyToCommissions;
    return this;
  }

  /**
   * Get applyToCommissions
   * @return applyToCommissions
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_APPLY_TO_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getApplyToCommissions() {
    return applyToCommissions;
  }


  @JsonProperty(JSON_PROPERTY_APPLY_TO_COMMISSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setApplyToCommissions(@jakarta.annotation.Nullable Boolean applyToCommissions) {
    this.applyToCommissions = applyToCommissions;
  }


  public CategoryDiscount criteria(@jakarta.annotation.Nullable List<@Valid DiscountCriteria> criteria) {
    this.criteria = criteria;
    return this;
  }

  public CategoryDiscount addCriteriaItem(DiscountCriteria criteriaItem) {
    if (this.criteria == null) {
      this.criteria = new ArrayList<>();
    }
    this.criteria.add(criteriaItem);
    return this;
  }

  /**
   * Get criteria
   * @return criteria
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CRITERIA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid DiscountCriteria> getCriteria() {
    return criteria;
  }


  @JsonProperty(JSON_PROPERTY_CRITERIA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCriteria(@jakarta.annotation.Nullable List<@Valid DiscountCriteria> criteria) {
    this.criteria = criteria;
  }


  public CategoryDiscount description(@jakarta.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(@jakarta.annotation.Nullable String description) {
    this.description = description;
  }


  public CategoryDiscount discountPercent(@jakarta.annotation.Nullable Double discountPercent) {
    this.discountPercent = discountPercent;
    return this;
  }

  /**
   * Get discountPercent
   * @return discountPercent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getDiscountPercent() {
    return discountPercent;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDiscountPercent(@jakarta.annotation.Nullable Double discountPercent) {
    this.discountPercent = discountPercent;
  }


  public CategoryDiscount id(@jakarta.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable String id) {
    this.id = id;
  }


  public CategoryDiscount name(@jakarta.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(@jakarta.annotation.Nullable String name) {
    this.name = name;
  }


  public CategoryDiscount productCategories(@jakarta.annotation.Nullable List<String> productCategories) {
    this.productCategories = productCategories;
    return this;
  }

  public CategoryDiscount addProductCategoriesItem(String productCategoriesItem) {
    if (this.productCategories == null) {
      this.productCategories = new ArrayList<>();
    }
    this.productCategories.add(productCategoriesItem);
    return this;
  }

  /**
   * Get productCategories
   * @return productCategories
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<String> getProductCategories() {
    return productCategories;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductCategories(@jakarta.annotation.Nullable List<String> productCategories) {
    this.productCategories = productCategories;
  }

  /**
   * Return true if this CategoryDiscount object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CategoryDiscount categoryDiscount = (CategoryDiscount) o;
    return Objects.equals(this.applyToCommissions, categoryDiscount.applyToCommissions) &&
        Objects.equals(this.criteria, categoryDiscount.criteria) &&
        Objects.equals(this.description, categoryDiscount.description) &&
        Objects.equals(this.discountPercent, categoryDiscount.discountPercent) &&
        Objects.equals(this.id, categoryDiscount.id) &&
        Objects.equals(this.name, categoryDiscount.name) &&
        Objects.equals(this.productCategories, categoryDiscount.productCategories);
  }

  @Override
  public int hashCode() {
    return Objects.hash(applyToCommissions, criteria, description, discountPercent, id, name, productCategories);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CategoryDiscount {\n");
    sb.append("    applyToCommissions: ").append(toIndentedString(applyToCommissions)).append("\n");
    sb.append("    criteria: ").append(toIndentedString(criteria)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    discountPercent: ").append(toIndentedString(discountPercent)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    productCategories: ").append(toIndentedString(productCategories)).append("\n");
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
    
        private CategoryDiscount instance;
    
        public Builder() {
          this(new CategoryDiscount());
        }
    
        protected Builder(CategoryDiscount instance) {
          this.instance = instance;
        }
    
        public CategoryDiscount.Builder applyToCommissions(Boolean applyToCommissions) {
              this.instance.applyToCommissions = applyToCommissions;
          return this;
        }
            public CategoryDiscount.Builder criteria(List<DiscountCriteria> criteria) {
              this.instance.criteria = criteria;
          return this;
        }
            public CategoryDiscount.Builder description(String description) {
              this.instance.description = description;
          return this;
        }
            public CategoryDiscount.Builder discountPercent(Double discountPercent) {
              this.instance.discountPercent = discountPercent;
          return this;
        }
            public CategoryDiscount.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public CategoryDiscount.Builder name(String name) {
              this.instance.name = name;
          return this;
        }
            public CategoryDiscount.Builder productCategories(List<String> productCategories) {
              this.instance.productCategories = productCategories;
          return this;
        }
        
    
        /**
        * returns a built CategoryDiscount instance.
        *
        * The builder is not reusable.
        */
        public CategoryDiscount build() {
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
      public static CategoryDiscount.Builder builder() {
        return new CategoryDiscount.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public CategoryDiscount.Builder toBuilder() {
        return new CategoryDiscount.Builder()
          .applyToCommissions(getApplyToCommissions())
          .criteria(getCriteria())
          .description(getDescription())
          .discountPercent(getDiscountPercent())
          .id(getId())
          .name(getName())
          .productCategories(getProductCategories());
      }
}

