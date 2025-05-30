<?php
/**
 * PipelineCustomFieldDisplayOptions
 *
 * PHP version 8.1
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.13.0
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Keap\Core\V2\Model;

use \ArrayAccess;
use \Keap\Core\V2\ObjectSerializer;

/**
 * PipelineCustomFieldDisplayOptions Class Doc Comment
 *
 * @category Class
 * @description Class representing display options for a custom field.
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PipelineCustomFieldDisplayOptions implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PipelineCustomFieldDisplayOptions';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'type' => '\Keap\Core\V2\Model\PipelineCustomFieldDisplayOptionsType',
        'hidden' => 'bool',
        'array_display_options' => '\Keap\Core\V2\Model\PipelineCustomFieldArrayDisplayOptions',
        'reference_type_display_options' => '\Keap\Core\V2\Model\PipelineCustomFieldRefDisplayOptions',
        'date_time_display_options' => '\Keap\Core\V2\Model\PipelineCustomFieldDateTimeOptions',
        'boolean_display_options' => '\Keap\Core\V2\Model\PipelineCustomFieldBooleanDisplayOptions',
        'duration' => '\Keap\Core\V2\Model\PipelineCustomFieldDurationDisplayOptions'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'type' => null,
        'hidden' => null,
        'array_display_options' => null,
        'reference_type_display_options' => null,
        'date_time_display_options' => null,
        'boolean_display_options' => null,
        'duration' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'type' => false,
        'hidden' => false,
        'array_display_options' => false,
        'reference_type_display_options' => false,
        'date_time_display_options' => false,
        'boolean_display_options' => false,
        'duration' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'type' => 'type',
        'hidden' => 'hidden',
        'array_display_options' => 'array_display_options',
        'reference_type_display_options' => 'reference_type_display_options',
        'date_time_display_options' => 'date_time_display_options',
        'boolean_display_options' => 'boolean_display_options',
        'duration' => 'duration'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'type' => 'setType',
        'hidden' => 'setHidden',
        'array_display_options' => 'setArrayDisplayOptions',
        'reference_type_display_options' => 'setReferenceTypeDisplayOptions',
        'date_time_display_options' => 'setDateTimeDisplayOptions',
        'boolean_display_options' => 'setBooleanDisplayOptions',
        'duration' => 'setDuration'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'type' => 'getType',
        'hidden' => 'getHidden',
        'array_display_options' => 'getArrayDisplayOptions',
        'reference_type_display_options' => 'getReferenceTypeDisplayOptions',
        'date_time_display_options' => 'getDateTimeDisplayOptions',
        'boolean_display_options' => 'getBooleanDisplayOptions',
        'duration' => 'getDuration'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[]|null $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('type', $data ?? [], null);
        $this->setIfExists('hidden', $data ?? [], null);
        $this->setIfExists('array_display_options', $data ?? [], null);
        $this->setIfExists('reference_type_display_options', $data ?? [], null);
        $this->setIfExists('date_time_display_options', $data ?? [], null);
        $this->setIfExists('boolean_display_options', $data ?? [], null);
        $this->setIfExists('duration', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['type'] === null) {
            $invalidProperties[] = "'type' can't be null";
        }
        if ($this->container['hidden'] === null) {
            $invalidProperties[] = "'hidden' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets type
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldDisplayOptionsType
     */
    public function getType()
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldDisplayOptionsType $type The type of display options. This field is required.
     *
     * @return self
     */
    public function setType($type)
    {
        if (is_null($type)) {
            throw new \InvalidArgumentException('non-nullable type cannot be null');
        }
        $this->container['type'] = $type;

        return $this;
    }

    /**
     * Gets hidden
     *
     * @return bool
     */
    public function getHidden()
    {
        return $this->container['hidden'];
    }

    /**
     * Sets hidden
     *
     * @param bool $hidden Indicates whether the custom field is hidden.
     *
     * @return self
     */
    public function setHidden($hidden)
    {
        if (is_null($hidden)) {
            throw new \InvalidArgumentException('non-nullable hidden cannot be null');
        }
        $this->container['hidden'] = $hidden;

        return $this;
    }

    /**
     * Gets array_display_options
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldArrayDisplayOptions|null
     */
    public function getArrayDisplayOptions()
    {
        return $this->container['array_display_options'];
    }

    /**
     * Sets array_display_options
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldArrayDisplayOptions|null $array_display_options The display options for array type custom fields. This field is optional.
     *
     * @return self
     */
    public function setArrayDisplayOptions($array_display_options)
    {
        if (is_null($array_display_options)) {
            throw new \InvalidArgumentException('non-nullable array_display_options cannot be null');
        }
        $this->container['array_display_options'] = $array_display_options;

        return $this;
    }

    /**
     * Gets reference_type_display_options
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldRefDisplayOptions|null
     */
    public function getReferenceTypeDisplayOptions()
    {
        return $this->container['reference_type_display_options'];
    }

    /**
     * Sets reference_type_display_options
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldRefDisplayOptions|null $reference_type_display_options The display options for reference type custom fields. This field is optional.
     *
     * @return self
     */
    public function setReferenceTypeDisplayOptions($reference_type_display_options)
    {
        if (is_null($reference_type_display_options)) {
            throw new \InvalidArgumentException('non-nullable reference_type_display_options cannot be null');
        }
        $this->container['reference_type_display_options'] = $reference_type_display_options;

        return $this;
    }

    /**
     * Gets date_time_display_options
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldDateTimeOptions|null
     */
    public function getDateTimeDisplayOptions()
    {
        return $this->container['date_time_display_options'];
    }

    /**
     * Sets date_time_display_options
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldDateTimeOptions|null $date_time_display_options The display options for date and time type custom fields. This field is optional.
     *
     * @return self
     */
    public function setDateTimeDisplayOptions($date_time_display_options)
    {
        if (is_null($date_time_display_options)) {
            throw new \InvalidArgumentException('non-nullable date_time_display_options cannot be null');
        }
        $this->container['date_time_display_options'] = $date_time_display_options;

        return $this;
    }

    /**
     * Gets boolean_display_options
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldBooleanDisplayOptions|null
     */
    public function getBooleanDisplayOptions()
    {
        return $this->container['boolean_display_options'];
    }

    /**
     * Sets boolean_display_options
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldBooleanDisplayOptions|null $boolean_display_options The display options for boolean type custom fields. This field is optional.
     *
     * @return self
     */
    public function setBooleanDisplayOptions($boolean_display_options)
    {
        if (is_null($boolean_display_options)) {
            throw new \InvalidArgumentException('non-nullable boolean_display_options cannot be null');
        }
        $this->container['boolean_display_options'] = $boolean_display_options;

        return $this;
    }

    /**
     * Gets duration
     *
     * @return \Keap\Core\V2\Model\PipelineCustomFieldDurationDisplayOptions|null
     */
    public function getDuration()
    {
        return $this->container['duration'];
    }

    /**
     * Sets duration
     *
     * @param \Keap\Core\V2\Model\PipelineCustomFieldDurationDisplayOptions|null $duration The display options for duration type custom fields. This field is optional.
     *
     * @return self
     */
    public function setDuration($duration)
    {
        if (is_null($duration)) {
            throw new \InvalidArgumentException('non-nullable duration cannot be null');
        }
        $this->container['duration'] = $duration;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


