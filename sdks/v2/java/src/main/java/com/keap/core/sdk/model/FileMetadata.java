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
 * FileMetadata
 */
@JsonPropertyOrder({
  FileMetadata.JSON_PROPERTY_CATEGORY,
  FileMetadata.JSON_PROPERTY_CONTACT_ID,
  FileMetadata.JSON_PROPERTY_CREATED_BY_ID,
  FileMetadata.JSON_PROPERTY_CREATED_TIME,
  FileMetadata.JSON_PROPERTY_FILE_BOX_TYPE,
  FileMetadata.JSON_PROPERTY_FILE_NAME,
  FileMetadata.JSON_PROPERTY_FILE_SIZE,
  FileMetadata.JSON_PROPERTY_ID,
  FileMetadata.JSON_PROPERTY_IS_PUBLIC,
  FileMetadata.JSON_PROPERTY_REMOTE_FILE_KEY,
  FileMetadata.JSON_PROPERTY_UPDATED_TIME
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class FileMetadata implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * Gets or Sets category
   */
  public enum CategoryEnum {
    ATTACHMENTS(String.valueOf("ATTACHMENTS")),
    
    CART(String.valueOf("CART")),
    
    DOCUMENTS(String.valueOf("DOCUMENTS")),
    
    HIDDEN(String.valueOf("HIDDEN")),
    
    INVOICE(String.valueOf("INVOICE")),
    
    LOGO(String.valueOf("LOGO")),
    
    TICKETS(String.valueOf("TICKETS")),
    
    WEB_FORM(String.valueOf("WEB_FORM")),
    
    FUNNEL(String.valueOf("FUNNEL")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    CategoryEnum(String value) {
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
    public static CategoryEnum fromValue(String value) {
      for (CategoryEnum b : CategoryEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_CATEGORY = "category";
  @jakarta.annotation.Nullable  private CategoryEnum category;

  public static final String JSON_PROPERTY_CONTACT_ID = "contact_id";
  @jakarta.annotation.Nullable  private String contactId;

  public static final String JSON_PROPERTY_CREATED_BY_ID = "created_by_id";
  @jakarta.annotation.Nullable  private String createdById;

  public static final String JSON_PROPERTY_CREATED_TIME = "created_time";
  @jakarta.annotation.Nullable  private String createdTime;

  /**
   * Gets or Sets fileBoxType
   */
  public enum FileBoxTypeEnum {
    APPLICATION(String.valueOf("APPLICATION")),
    
    IMAGE(String.valueOf("IMAGE")),
    
    FAX(String.valueOf("FAX")),
    
    ATTACHMENT(String.valueOf("ATTACHMENT")),
    
    TICKET(String.valueOf("TICKET")),
    
    CONTACT(String.valueOf("CONTACT")),
    
    DIGITAL_PRODUCT(String.valueOf("DIGITAL_PRODUCT")),
    
    IMPORT(String.valueOf("IMPORT")),
    
    HIDDEN(String.valueOf("HIDDEN")),
    
    WEB_FORM(String.valueOf("WEB_FORM")),
    
    STYLED_CART(String.valueOf("STYLED_CART")),
    
    RESAMPLED_IMAGE(String.valueOf("RESAMPLED_IMAGE")),
    
    TEMPLATE_THUMBNAIL(String.valueOf("TEMPLATE_THUMBNAIL")),
    
    FUNNEL(String.valueOf("FUNNEL")),
    
    LOGO_THUMBNAIL(String.valueOf("LOGO_THUMBNAIL")),
    
    UNLAYER(String.valueOf("UNLAYER")),
    
    BRANDING_CENTER_LOGO(String.valueOf("BRANDING_CENTER_LOGO")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    FileBoxTypeEnum(String value) {
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
    public static FileBoxTypeEnum fromValue(String value) {
      for (FileBoxTypeEnum b : FileBoxTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_FILE_BOX_TYPE = "file_box_type";
  @jakarta.annotation.Nullable  private FileBoxTypeEnum fileBoxType;

  public static final String JSON_PROPERTY_FILE_NAME = "file_name";
  @jakarta.annotation.Nullable  private String fileName;

  public static final String JSON_PROPERTY_FILE_SIZE = "file_size";
  @jakarta.annotation.Nullable  private Long fileSize;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable  private String id;

  public static final String JSON_PROPERTY_IS_PUBLIC = "is_public";
  @jakarta.annotation.Nullable  private Boolean isPublic;

  public static final String JSON_PROPERTY_REMOTE_FILE_KEY = "remote_file_key";
  @jakarta.annotation.Nullable  private String remoteFileKey;

  public static final String JSON_PROPERTY_UPDATED_TIME = "updated_time";
  @jakarta.annotation.Nullable  private String updatedTime;

  public FileMetadata() { 
  }

  public FileMetadata category(@jakarta.annotation.Nullable CategoryEnum category) {
    this.category = category;
    return this;
  }

  /**
   * Get category
   * @return category
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public CategoryEnum getCategory() {
    return category;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategory(@jakarta.annotation.Nullable CategoryEnum category) {
    this.category = category;
  }


  public FileMetadata contactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
    return this;
  }

  /**
   * Get contactId
   * @return contactId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getContactId() {
    return contactId;
  }


  @JsonProperty(JSON_PROPERTY_CONTACT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setContactId(@jakarta.annotation.Nullable String contactId) {
    this.contactId = contactId;
  }


  public FileMetadata createdById(@jakarta.annotation.Nullable String createdById) {
    this.createdById = createdById;
    return this;
  }

  /**
   * Get createdById
   * @return createdById
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREATED_BY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreatedById() {
    return createdById;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_BY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreatedById(@jakarta.annotation.Nullable String createdById) {
    this.createdById = createdById;
  }


  public FileMetadata createdTime(@jakarta.annotation.Nullable String createdTime) {
    this.createdTime = createdTime;
    return this;
  }

  /**
   * Get createdTime
   * @return createdTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_CREATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCreatedTime() {
    return createdTime;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreatedTime(@jakarta.annotation.Nullable String createdTime) {
    this.createdTime = createdTime;
  }


  public FileMetadata fileBoxType(@jakarta.annotation.Nullable FileBoxTypeEnum fileBoxType) {
    this.fileBoxType = fileBoxType;
    return this;
  }

  /**
   * Get fileBoxType
   * @return fileBoxType
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FILE_BOX_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public FileBoxTypeEnum getFileBoxType() {
    return fileBoxType;
  }


  @JsonProperty(JSON_PROPERTY_FILE_BOX_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileBoxType(@jakarta.annotation.Nullable FileBoxTypeEnum fileBoxType) {
    this.fileBoxType = fileBoxType;
  }


  public FileMetadata fileName(@jakarta.annotation.Nullable String fileName) {
    this.fileName = fileName;
    return this;
  }

  /**
   * Get fileName
   * @return fileName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFileName() {
    return fileName;
  }


  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileName(@jakarta.annotation.Nullable String fileName) {
    this.fileName = fileName;
  }


  public FileMetadata fileSize(@jakarta.annotation.Nullable Long fileSize) {
    this.fileSize = fileSize;
    return this;
  }

  /**
   * Get fileSize
   * @return fileSize
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FILE_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Long getFileSize() {
    return fileSize;
  }


  @JsonProperty(JSON_PROPERTY_FILE_SIZE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileSize(@jakarta.annotation.Nullable Long fileSize) {
    this.fileSize = fileSize;
  }


  public FileMetadata id(@jakarta.annotation.Nullable String id) {
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


  public FileMetadata isPublic(@jakarta.annotation.Nullable Boolean isPublic) {
    this.isPublic = isPublic;
    return this;
  }

  /**
   * Get isPublic
   * @return isPublic
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_PUBLIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsPublic() {
    return isPublic;
  }


  @JsonProperty(JSON_PROPERTY_IS_PUBLIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsPublic(@jakarta.annotation.Nullable Boolean isPublic) {
    this.isPublic = isPublic;
  }


  public FileMetadata remoteFileKey(@jakarta.annotation.Nullable String remoteFileKey) {
    this.remoteFileKey = remoteFileKey;
    return this;
  }

  /**
   * Get remoteFileKey
   * @return remoteFileKey
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_REMOTE_FILE_KEY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRemoteFileKey() {
    return remoteFileKey;
  }


  @JsonProperty(JSON_PROPERTY_REMOTE_FILE_KEY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRemoteFileKey(@jakarta.annotation.Nullable String remoteFileKey) {
    this.remoteFileKey = remoteFileKey;
  }


  public FileMetadata updatedTime(@jakarta.annotation.Nullable String updatedTime) {
    this.updatedTime = updatedTime;
    return this;
  }

  /**
   * Get updatedTime
   * @return updatedTime
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getUpdatedTime() {
    return updatedTime;
  }


  @JsonProperty(JSON_PROPERTY_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpdatedTime(@jakarta.annotation.Nullable String updatedTime) {
    this.updatedTime = updatedTime;
  }

  /**
   * Return true if this FileMetadata object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FileMetadata fileMetadata = (FileMetadata) o;
    return Objects.equals(this.category, fileMetadata.category) &&
        Objects.equals(this.contactId, fileMetadata.contactId) &&
        Objects.equals(this.createdById, fileMetadata.createdById) &&
        Objects.equals(this.createdTime, fileMetadata.createdTime) &&
        Objects.equals(this.fileBoxType, fileMetadata.fileBoxType) &&
        Objects.equals(this.fileName, fileMetadata.fileName) &&
        Objects.equals(this.fileSize, fileMetadata.fileSize) &&
        Objects.equals(this.id, fileMetadata.id) &&
        Objects.equals(this.isPublic, fileMetadata.isPublic) &&
        Objects.equals(this.remoteFileKey, fileMetadata.remoteFileKey) &&
        Objects.equals(this.updatedTime, fileMetadata.updatedTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, contactId, createdById, createdTime, fileBoxType, fileName, fileSize, id, isPublic, remoteFileKey, updatedTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FileMetadata {\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    contactId: ").append(toIndentedString(contactId)).append("\n");
    sb.append("    createdById: ").append(toIndentedString(createdById)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    fileBoxType: ").append(toIndentedString(fileBoxType)).append("\n");
    sb.append("    fileName: ").append(toIndentedString(fileName)).append("\n");
    sb.append("    fileSize: ").append(toIndentedString(fileSize)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isPublic: ").append(toIndentedString(isPublic)).append("\n");
    sb.append("    remoteFileKey: ").append(toIndentedString(remoteFileKey)).append("\n");
    sb.append("    updatedTime: ").append(toIndentedString(updatedTime)).append("\n");
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
    
        private FileMetadata instance;
    
        public Builder() {
          this(new FileMetadata());
        }
    
        protected Builder(FileMetadata instance) {
          this.instance = instance;
        }
    
        public FileMetadata.Builder category(CategoryEnum category) {
              this.instance.category = category;
          return this;
        }
            public FileMetadata.Builder contactId(String contactId) {
              this.instance.contactId = contactId;
          return this;
        }
            public FileMetadata.Builder createdById(String createdById) {
              this.instance.createdById = createdById;
          return this;
        }
            public FileMetadata.Builder createdTime(String createdTime) {
              this.instance.createdTime = createdTime;
          return this;
        }
            public FileMetadata.Builder fileBoxType(FileBoxTypeEnum fileBoxType) {
              this.instance.fileBoxType = fileBoxType;
          return this;
        }
            public FileMetadata.Builder fileName(String fileName) {
              this.instance.fileName = fileName;
          return this;
        }
            public FileMetadata.Builder fileSize(Long fileSize) {
              this.instance.fileSize = fileSize;
          return this;
        }
            public FileMetadata.Builder id(String id) {
              this.instance.id = id;
          return this;
        }
            public FileMetadata.Builder isPublic(Boolean isPublic) {
              this.instance.isPublic = isPublic;
          return this;
        }
            public FileMetadata.Builder remoteFileKey(String remoteFileKey) {
              this.instance.remoteFileKey = remoteFileKey;
          return this;
        }
            public FileMetadata.Builder updatedTime(String updatedTime) {
              this.instance.updatedTime = updatedTime;
          return this;
        }
        
    
        /**
        * returns a built FileMetadata instance.
        *
        * The builder is not reusable.
        */
        public FileMetadata build() {
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
      public static FileMetadata.Builder builder() {
        return new FileMetadata.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public FileMetadata.Builder toBuilder() {
        return new FileMetadata.Builder()
          .category(getCategory())
          .contactId(getContactId())
          .createdById(getCreatedById())
          .createdTime(getCreatedTime())
          .fileBoxType(getFileBoxType())
          .fileName(getFileName())
          .fileSize(getFileSize())
          .id(getId())
          .isPublic(getIsPublic())
          .remoteFileKey(getRemoteFileKey())
          .updatedTime(getUpdatedTime());
      }
}

