/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.transit_realtime = (function() {
    
        /**
         * Namespace transit_realtime.
         * @exports transit_realtime
         * @namespace
         */
        var transit_realtime = {};
    
        transit_realtime.FeedMessage = (function() {
    
            /**
             * Properties of a FeedMessage.
             * @memberof transit_realtime
             * @interface IFeedMessage
             * @property {transit_realtime.IFeedHeader} header FeedMessage header
             * @property {Array.<transit_realtime.IFeedEntity>|null} [entity] FeedMessage entity
             */
    
            /**
             * Constructs a new FeedMessage.
             * @memberof transit_realtime
             * @classdesc Represents a FeedMessage.
             * @implements IFeedMessage
             * @constructor
             * @param {transit_realtime.IFeedMessage=} [properties] Properties to set
             */
            function FeedMessage(properties) {
                this.entity = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FeedMessage header.
             * @member {transit_realtime.IFeedHeader} header
             * @memberof transit_realtime.FeedMessage
             * @instance
             */
            FeedMessage.prototype.header = null;
    
            /**
             * FeedMessage entity.
             * @member {Array.<transit_realtime.IFeedEntity>} entity
             * @memberof transit_realtime.FeedMessage
             * @instance
             */
            FeedMessage.prototype.entity = $util.emptyArray;
    
            /**
             * Creates a new FeedMessage instance using the specified properties.
             * @function create
             * @memberof transit_realtime.FeedMessage
             * @static
             * @param {transit_realtime.IFeedMessage=} [properties] Properties to set
             * @returns {transit_realtime.FeedMessage} FeedMessage instance
             */
            FeedMessage.create = function create(properties) {
                return new FeedMessage(properties);
            };
    
            /**
             * Decodes a FeedMessage message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.FeedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.FeedMessage} FeedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeedMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.FeedMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.header = $root.transit_realtime.FeedHeader.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.entity && message.entity.length))
                                message.entity = [];
                            message.entity.push($root.transit_realtime.FeedEntity.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("header"))
                    throw $util.ProtocolError("missing required 'header'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a FeedMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.FeedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.FeedMessage} FeedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeedMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FeedMessage message.
             * @function verify
             * @memberof transit_realtime.FeedMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeedMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.transit_realtime.FeedHeader.verify(message.header);
                    if (error)
                        return "header." + error;
                }
                if (message.entity != null && message.hasOwnProperty("entity")) {
                    if (!Array.isArray(message.entity))
                        return "entity: array expected";
                    for (var i = 0; i < message.entity.length; ++i) {
                        var error = $root.transit_realtime.FeedEntity.verify(message.entity[i]);
                        if (error)
                            return "entity." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.FeedMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.FeedMessage} FeedMessage
             */
            FeedMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.FeedMessage)
                    return object;
                var message = new $root.transit_realtime.FeedMessage();
                if (object.header != null) {
                    if (typeof object.header !== "object")
                        throw TypeError(".transit_realtime.FeedMessage.header: object expected");
                    message.header = $root.transit_realtime.FeedHeader.fromObject(object.header);
                }
                if (object.entity) {
                    if (!Array.isArray(object.entity))
                        throw TypeError(".transit_realtime.FeedMessage.entity: array expected");
                    message.entity = [];
                    for (var i = 0; i < object.entity.length; ++i) {
                        if (typeof object.entity[i] !== "object")
                            throw TypeError(".transit_realtime.FeedMessage.entity: object expected");
                        message.entity[i] = $root.transit_realtime.FeedEntity.fromObject(object.entity[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FeedMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.FeedMessage
             * @static
             * @param {transit_realtime.FeedMessage} message FeedMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FeedMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.entity = [];
                if (options.defaults)
                    object.header = null;
                if (message.header != null && message.hasOwnProperty("header"))
                    object.header = $root.transit_realtime.FeedHeader.toObject(message.header, options);
                if (message.entity && message.entity.length) {
                    object.entity = [];
                    for (var j = 0; j < message.entity.length; ++j)
                        object.entity[j] = $root.transit_realtime.FeedEntity.toObject(message.entity[j], options);
                }
                return object;
            };
    
            /**
             * Converts this FeedMessage to JSON.
             * @function toJSON
             * @memberof transit_realtime.FeedMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FeedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for FeedMessage
             * @function getTypeUrl
             * @memberof transit_realtime.FeedMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FeedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.FeedMessage";
            };
    
            return FeedMessage;
        })();
    
        transit_realtime.FeedHeader = (function() {
    
            /**
             * Properties of a FeedHeader.
             * @memberof transit_realtime
             * @interface IFeedHeader
             * @property {string} gtfsRealtimeVersion FeedHeader gtfsRealtimeVersion
             * @property {transit_realtime.FeedHeader.Incrementality|null} [incrementality] FeedHeader incrementality
             * @property {number|Long|null} [timestamp] FeedHeader timestamp
             * @property {string|null} [feedVersion] FeedHeader feedVersion
             */
    
            /**
             * Constructs a new FeedHeader.
             * @memberof transit_realtime
             * @classdesc Represents a FeedHeader.
             * @implements IFeedHeader
             * @constructor
             * @param {transit_realtime.IFeedHeader=} [properties] Properties to set
             */
            function FeedHeader(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FeedHeader gtfsRealtimeVersion.
             * @member {string} gtfsRealtimeVersion
             * @memberof transit_realtime.FeedHeader
             * @instance
             */
            FeedHeader.prototype.gtfsRealtimeVersion = "";
    
            /**
             * FeedHeader incrementality.
             * @member {transit_realtime.FeedHeader.Incrementality} incrementality
             * @memberof transit_realtime.FeedHeader
             * @instance
             */
            FeedHeader.prototype.incrementality = 0;
    
            /**
             * FeedHeader timestamp.
             * @member {number|Long} timestamp
             * @memberof transit_realtime.FeedHeader
             * @instance
             */
            FeedHeader.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * FeedHeader feedVersion.
             * @member {string} feedVersion
             * @memberof transit_realtime.FeedHeader
             * @instance
             */
            FeedHeader.prototype.feedVersion = "";
    
            /**
             * Creates a new FeedHeader instance using the specified properties.
             * @function create
             * @memberof transit_realtime.FeedHeader
             * @static
             * @param {transit_realtime.IFeedHeader=} [properties] Properties to set
             * @returns {transit_realtime.FeedHeader} FeedHeader instance
             */
            FeedHeader.create = function create(properties) {
                return new FeedHeader(properties);
            };
    
            /**
             * Decodes a FeedHeader message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.FeedHeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.FeedHeader} FeedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeedHeader.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.FeedHeader();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.gtfsRealtimeVersion = reader.string();
                            break;
                        }
                    case 2: {
                            message.incrementality = reader.int32();
                            break;
                        }
                    case 3: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.feedVersion = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("gtfsRealtimeVersion"))
                    throw $util.ProtocolError("missing required 'gtfsRealtimeVersion'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a FeedHeader message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.FeedHeader
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.FeedHeader} FeedHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeedHeader.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FeedHeader message.
             * @function verify
             * @memberof transit_realtime.FeedHeader
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeedHeader.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.gtfsRealtimeVersion))
                    return "gtfsRealtimeVersion: string expected";
                if (message.incrementality != null && message.hasOwnProperty("incrementality"))
                    switch (message.incrementality) {
                    default:
                        return "incrementality: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.feedVersion != null && message.hasOwnProperty("feedVersion"))
                    if (!$util.isString(message.feedVersion))
                        return "feedVersion: string expected";
                return null;
            };
    
            /**
             * Creates a FeedHeader message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.FeedHeader
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.FeedHeader} FeedHeader
             */
            FeedHeader.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.FeedHeader)
                    return object;
                var message = new $root.transit_realtime.FeedHeader();
                if (object.gtfsRealtimeVersion != null)
                    message.gtfsRealtimeVersion = String(object.gtfsRealtimeVersion);
                switch (object.incrementality) {
                default:
                    if (typeof object.incrementality === "number") {
                        message.incrementality = object.incrementality;
                        break;
                    }
                    break;
                case "FULL_DATASET":
                case 0:
                    message.incrementality = 0;
                    break;
                case "DIFFERENTIAL":
                case 1:
                    message.incrementality = 1;
                    break;
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                if (object.feedVersion != null)
                    message.feedVersion = String(object.feedVersion);
                return message;
            };
    
            /**
             * Creates a plain object from a FeedHeader message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.FeedHeader
             * @static
             * @param {transit_realtime.FeedHeader} message FeedHeader
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FeedHeader.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.gtfsRealtimeVersion = "";
                    object.incrementality = options.enums === String ? "FULL_DATASET" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    object.feedVersion = "";
                }
                if (message.gtfsRealtimeVersion != null && message.hasOwnProperty("gtfsRealtimeVersion"))
                    object.gtfsRealtimeVersion = message.gtfsRealtimeVersion;
                if (message.incrementality != null && message.hasOwnProperty("incrementality"))
                    object.incrementality = options.enums === String ? $root.transit_realtime.FeedHeader.Incrementality[message.incrementality] === undefined ? message.incrementality : $root.transit_realtime.FeedHeader.Incrementality[message.incrementality] : message.incrementality;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (message.feedVersion != null && message.hasOwnProperty("feedVersion"))
                    object.feedVersion = message.feedVersion;
                return object;
            };
    
            /**
             * Converts this FeedHeader to JSON.
             * @function toJSON
             * @memberof transit_realtime.FeedHeader
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FeedHeader.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for FeedHeader
             * @function getTypeUrl
             * @memberof transit_realtime.FeedHeader
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FeedHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.FeedHeader";
            };
    
            /**
             * Incrementality enum.
             * @name transit_realtime.FeedHeader.Incrementality
             * @enum {number}
             * @property {number} FULL_DATASET=0 FULL_DATASET value
             * @property {number} DIFFERENTIAL=1 DIFFERENTIAL value
             */
            FeedHeader.Incrementality = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FULL_DATASET"] = 0;
                values[valuesById[1] = "DIFFERENTIAL"] = 1;
                return values;
            })();
    
            return FeedHeader;
        })();
    
        transit_realtime.FeedEntity = (function() {
    
            /**
             * Properties of a FeedEntity.
             * @memberof transit_realtime
             * @interface IFeedEntity
             * @property {string} id FeedEntity id
             * @property {boolean|null} [isDeleted] FeedEntity isDeleted
             * @property {transit_realtime.ITripUpdate|null} [tripUpdate] FeedEntity tripUpdate
             * @property {transit_realtime.IVehiclePosition|null} [vehicle] FeedEntity vehicle
             * @property {transit_realtime.IAlert|null} [alert] FeedEntity alert
             * @property {transit_realtime.IShape|null} [shape] FeedEntity shape
             * @property {transit_realtime.IStop|null} [stop] FeedEntity stop
             * @property {transit_realtime.ITripModifications|null} [tripModifications] FeedEntity tripModifications
             */
    
            /**
             * Constructs a new FeedEntity.
             * @memberof transit_realtime
             * @classdesc Represents a FeedEntity.
             * @implements IFeedEntity
             * @constructor
             * @param {transit_realtime.IFeedEntity=} [properties] Properties to set
             */
            function FeedEntity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FeedEntity id.
             * @member {string} id
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.id = "";
    
            /**
             * FeedEntity isDeleted.
             * @member {boolean} isDeleted
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.isDeleted = false;
    
            /**
             * FeedEntity tripUpdate.
             * @member {transit_realtime.ITripUpdate|null|undefined} tripUpdate
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.tripUpdate = null;
    
            /**
             * FeedEntity vehicle.
             * @member {transit_realtime.IVehiclePosition|null|undefined} vehicle
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.vehicle = null;
    
            /**
             * FeedEntity alert.
             * @member {transit_realtime.IAlert|null|undefined} alert
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.alert = null;
    
            /**
             * FeedEntity shape.
             * @member {transit_realtime.IShape|null|undefined} shape
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.shape = null;
    
            /**
             * FeedEntity stop.
             * @member {transit_realtime.IStop|null|undefined} stop
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.stop = null;
    
            /**
             * FeedEntity tripModifications.
             * @member {transit_realtime.ITripModifications|null|undefined} tripModifications
             * @memberof transit_realtime.FeedEntity
             * @instance
             */
            FeedEntity.prototype.tripModifications = null;
    
            /**
             * Creates a new FeedEntity instance using the specified properties.
             * @function create
             * @memberof transit_realtime.FeedEntity
             * @static
             * @param {transit_realtime.IFeedEntity=} [properties] Properties to set
             * @returns {transit_realtime.FeedEntity} FeedEntity instance
             */
            FeedEntity.create = function create(properties) {
                return new FeedEntity(properties);
            };
    
            /**
             * Decodes a FeedEntity message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.FeedEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.FeedEntity} FeedEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeedEntity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.FeedEntity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.isDeleted = reader.bool();
                            break;
                        }
                    case 3: {
                            message.tripUpdate = $root.transit_realtime.TripUpdate.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.vehicle = $root.transit_realtime.VehiclePosition.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.alert = $root.transit_realtime.Alert.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.shape = $root.transit_realtime.Shape.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.stop = $root.transit_realtime.Stop.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.tripModifications = $root.transit_realtime.TripModifications.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a FeedEntity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.FeedEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.FeedEntity} FeedEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeedEntity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FeedEntity message.
             * @function verify
             * @memberof transit_realtime.FeedEntity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeedEntity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.id))
                    return "id: string expected";
                if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                    if (typeof message.isDeleted !== "boolean")
                        return "isDeleted: boolean expected";
                if (message.tripUpdate != null && message.hasOwnProperty("tripUpdate")) {
                    var error = $root.transit_realtime.TripUpdate.verify(message.tripUpdate);
                    if (error)
                        return "tripUpdate." + error;
                }
                if (message.vehicle != null && message.hasOwnProperty("vehicle")) {
                    var error = $root.transit_realtime.VehiclePosition.verify(message.vehicle);
                    if (error)
                        return "vehicle." + error;
                }
                if (message.alert != null && message.hasOwnProperty("alert")) {
                    var error = $root.transit_realtime.Alert.verify(message.alert);
                    if (error)
                        return "alert." + error;
                }
                if (message.shape != null && message.hasOwnProperty("shape")) {
                    var error = $root.transit_realtime.Shape.verify(message.shape);
                    if (error)
                        return "shape." + error;
                }
                if (message.stop != null && message.hasOwnProperty("stop")) {
                    var error = $root.transit_realtime.Stop.verify(message.stop);
                    if (error)
                        return "stop." + error;
                }
                if (message.tripModifications != null && message.hasOwnProperty("tripModifications")) {
                    var error = $root.transit_realtime.TripModifications.verify(message.tripModifications);
                    if (error)
                        return "tripModifications." + error;
                }
                return null;
            };
    
            /**
             * Creates a FeedEntity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.FeedEntity
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.FeedEntity} FeedEntity
             */
            FeedEntity.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.FeedEntity)
                    return object;
                var message = new $root.transit_realtime.FeedEntity();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.isDeleted != null)
                    message.isDeleted = Boolean(object.isDeleted);
                if (object.tripUpdate != null) {
                    if (typeof object.tripUpdate !== "object")
                        throw TypeError(".transit_realtime.FeedEntity.tripUpdate: object expected");
                    message.tripUpdate = $root.transit_realtime.TripUpdate.fromObject(object.tripUpdate);
                }
                if (object.vehicle != null) {
                    if (typeof object.vehicle !== "object")
                        throw TypeError(".transit_realtime.FeedEntity.vehicle: object expected");
                    message.vehicle = $root.transit_realtime.VehiclePosition.fromObject(object.vehicle);
                }
                if (object.alert != null) {
                    if (typeof object.alert !== "object")
                        throw TypeError(".transit_realtime.FeedEntity.alert: object expected");
                    message.alert = $root.transit_realtime.Alert.fromObject(object.alert);
                }
                if (object.shape != null) {
                    if (typeof object.shape !== "object")
                        throw TypeError(".transit_realtime.FeedEntity.shape: object expected");
                    message.shape = $root.transit_realtime.Shape.fromObject(object.shape);
                }
                if (object.stop != null) {
                    if (typeof object.stop !== "object")
                        throw TypeError(".transit_realtime.FeedEntity.stop: object expected");
                    message.stop = $root.transit_realtime.Stop.fromObject(object.stop);
                }
                if (object.tripModifications != null) {
                    if (typeof object.tripModifications !== "object")
                        throw TypeError(".transit_realtime.FeedEntity.tripModifications: object expected");
                    message.tripModifications = $root.transit_realtime.TripModifications.fromObject(object.tripModifications);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FeedEntity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.FeedEntity
             * @static
             * @param {transit_realtime.FeedEntity} message FeedEntity
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FeedEntity.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.isDeleted = false;
                    object.tripUpdate = null;
                    object.vehicle = null;
                    object.alert = null;
                    object.shape = null;
                    object.stop = null;
                    object.tripModifications = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                    object.isDeleted = message.isDeleted;
                if (message.tripUpdate != null && message.hasOwnProperty("tripUpdate"))
                    object.tripUpdate = $root.transit_realtime.TripUpdate.toObject(message.tripUpdate, options);
                if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                    object.vehicle = $root.transit_realtime.VehiclePosition.toObject(message.vehicle, options);
                if (message.alert != null && message.hasOwnProperty("alert"))
                    object.alert = $root.transit_realtime.Alert.toObject(message.alert, options);
                if (message.shape != null && message.hasOwnProperty("shape"))
                    object.shape = $root.transit_realtime.Shape.toObject(message.shape, options);
                if (message.stop != null && message.hasOwnProperty("stop"))
                    object.stop = $root.transit_realtime.Stop.toObject(message.stop, options);
                if (message.tripModifications != null && message.hasOwnProperty("tripModifications"))
                    object.tripModifications = $root.transit_realtime.TripModifications.toObject(message.tripModifications, options);
                return object;
            };
    
            /**
             * Converts this FeedEntity to JSON.
             * @function toJSON
             * @memberof transit_realtime.FeedEntity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FeedEntity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for FeedEntity
             * @function getTypeUrl
             * @memberof transit_realtime.FeedEntity
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FeedEntity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.FeedEntity";
            };
    
            return FeedEntity;
        })();
    
        transit_realtime.TripUpdate = (function() {
    
            /**
             * Properties of a TripUpdate.
             * @memberof transit_realtime
             * @interface ITripUpdate
             * @property {transit_realtime.ITripDescriptor} trip TripUpdate trip
             * @property {transit_realtime.IVehicleDescriptor|null} [vehicle] TripUpdate vehicle
             * @property {Array.<transit_realtime.TripUpdate.IStopTimeUpdate>|null} [stopTimeUpdate] TripUpdate stopTimeUpdate
             * @property {number|Long|null} [timestamp] TripUpdate timestamp
             * @property {number|null} [delay] TripUpdate delay
             * @property {transit_realtime.TripUpdate.ITripProperties|null} [tripProperties] TripUpdate tripProperties
             */
    
            /**
             * Constructs a new TripUpdate.
             * @memberof transit_realtime
             * @classdesc Represents a TripUpdate.
             * @implements ITripUpdate
             * @constructor
             * @param {transit_realtime.ITripUpdate=} [properties] Properties to set
             */
            function TripUpdate(properties) {
                this.stopTimeUpdate = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TripUpdate trip.
             * @member {transit_realtime.ITripDescriptor} trip
             * @memberof transit_realtime.TripUpdate
             * @instance
             */
            TripUpdate.prototype.trip = null;
    
            /**
             * TripUpdate vehicle.
             * @member {transit_realtime.IVehicleDescriptor|null|undefined} vehicle
             * @memberof transit_realtime.TripUpdate
             * @instance
             */
            TripUpdate.prototype.vehicle = null;
    
            /**
             * TripUpdate stopTimeUpdate.
             * @member {Array.<transit_realtime.TripUpdate.IStopTimeUpdate>} stopTimeUpdate
             * @memberof transit_realtime.TripUpdate
             * @instance
             */
            TripUpdate.prototype.stopTimeUpdate = $util.emptyArray;
    
            /**
             * TripUpdate timestamp.
             * @member {number|Long} timestamp
             * @memberof transit_realtime.TripUpdate
             * @instance
             */
            TripUpdate.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TripUpdate delay.
             * @member {number} delay
             * @memberof transit_realtime.TripUpdate
             * @instance
             */
            TripUpdate.prototype.delay = 0;
    
            /**
             * TripUpdate tripProperties.
             * @member {transit_realtime.TripUpdate.ITripProperties|null|undefined} tripProperties
             * @memberof transit_realtime.TripUpdate
             * @instance
             */
            TripUpdate.prototype.tripProperties = null;
    
            /**
             * Creates a new TripUpdate instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TripUpdate
             * @static
             * @param {transit_realtime.ITripUpdate=} [properties] Properties to set
             * @returns {transit_realtime.TripUpdate} TripUpdate instance
             */
            TripUpdate.create = function create(properties) {
                return new TripUpdate(properties);
            };
    
            /**
             * Decodes a TripUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TripUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TripUpdate} TripUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.trip = $root.transit_realtime.TripDescriptor.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.vehicle = $root.transit_realtime.VehicleDescriptor.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.stopTimeUpdate && message.stopTimeUpdate.length))
                                message.stopTimeUpdate = [];
                            message.stopTimeUpdate.push($root.transit_realtime.TripUpdate.StopTimeUpdate.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.delay = reader.int32();
                            break;
                        }
                    case 6: {
                            message.tripProperties = $root.transit_realtime.TripUpdate.TripProperties.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("trip"))
                    throw $util.ProtocolError("missing required 'trip'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a TripUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TripUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TripUpdate} TripUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TripUpdate message.
             * @function verify
             * @memberof transit_realtime.TripUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TripUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.transit_realtime.TripDescriptor.verify(message.trip);
                    if (error)
                        return "trip." + error;
                }
                if (message.vehicle != null && message.hasOwnProperty("vehicle")) {
                    var error = $root.transit_realtime.VehicleDescriptor.verify(message.vehicle);
                    if (error)
                        return "vehicle." + error;
                }
                if (message.stopTimeUpdate != null && message.hasOwnProperty("stopTimeUpdate")) {
                    if (!Array.isArray(message.stopTimeUpdate))
                        return "stopTimeUpdate: array expected";
                    for (var i = 0; i < message.stopTimeUpdate.length; ++i) {
                        var error = $root.transit_realtime.TripUpdate.StopTimeUpdate.verify(message.stopTimeUpdate[i]);
                        if (error)
                            return "stopTimeUpdate." + error;
                    }
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.delay != null && message.hasOwnProperty("delay"))
                    if (!$util.isInteger(message.delay))
                        return "delay: integer expected";
                if (message.tripProperties != null && message.hasOwnProperty("tripProperties")) {
                    var error = $root.transit_realtime.TripUpdate.TripProperties.verify(message.tripProperties);
                    if (error)
                        return "tripProperties." + error;
                }
                return null;
            };
    
            /**
             * Creates a TripUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TripUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TripUpdate} TripUpdate
             */
            TripUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TripUpdate)
                    return object;
                var message = new $root.transit_realtime.TripUpdate();
                if (object.trip != null) {
                    if (typeof object.trip !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.trip: object expected");
                    message.trip = $root.transit_realtime.TripDescriptor.fromObject(object.trip);
                }
                if (object.vehicle != null) {
                    if (typeof object.vehicle !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.vehicle: object expected");
                    message.vehicle = $root.transit_realtime.VehicleDescriptor.fromObject(object.vehicle);
                }
                if (object.stopTimeUpdate) {
                    if (!Array.isArray(object.stopTimeUpdate))
                        throw TypeError(".transit_realtime.TripUpdate.stopTimeUpdate: array expected");
                    message.stopTimeUpdate = [];
                    for (var i = 0; i < object.stopTimeUpdate.length; ++i) {
                        if (typeof object.stopTimeUpdate[i] !== "object")
                            throw TypeError(".transit_realtime.TripUpdate.stopTimeUpdate: object expected");
                        message.stopTimeUpdate[i] = $root.transit_realtime.TripUpdate.StopTimeUpdate.fromObject(object.stopTimeUpdate[i]);
                    }
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                if (object.delay != null)
                    message.delay = object.delay | 0;
                if (object.tripProperties != null) {
                    if (typeof object.tripProperties !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.tripProperties: object expected");
                    message.tripProperties = $root.transit_realtime.TripUpdate.TripProperties.fromObject(object.tripProperties);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TripUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TripUpdate
             * @static
             * @param {transit_realtime.TripUpdate} message TripUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TripUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.stopTimeUpdate = [];
                if (options.defaults) {
                    object.trip = null;
                    object.vehicle = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    object.delay = 0;
                    object.tripProperties = null;
                }
                if (message.trip != null && message.hasOwnProperty("trip"))
                    object.trip = $root.transit_realtime.TripDescriptor.toObject(message.trip, options);
                if (message.stopTimeUpdate && message.stopTimeUpdate.length) {
                    object.stopTimeUpdate = [];
                    for (var j = 0; j < message.stopTimeUpdate.length; ++j)
                        object.stopTimeUpdate[j] = $root.transit_realtime.TripUpdate.StopTimeUpdate.toObject(message.stopTimeUpdate[j], options);
                }
                if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                    object.vehicle = $root.transit_realtime.VehicleDescriptor.toObject(message.vehicle, options);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (message.delay != null && message.hasOwnProperty("delay"))
                    object.delay = message.delay;
                if (message.tripProperties != null && message.hasOwnProperty("tripProperties"))
                    object.tripProperties = $root.transit_realtime.TripUpdate.TripProperties.toObject(message.tripProperties, options);
                return object;
            };
    
            /**
             * Converts this TripUpdate to JSON.
             * @function toJSON
             * @memberof transit_realtime.TripUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TripUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for TripUpdate
             * @function getTypeUrl
             * @memberof transit_realtime.TripUpdate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TripUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.TripUpdate";
            };
    
            TripUpdate.StopTimeEvent = (function() {
    
                /**
                 * Properties of a StopTimeEvent.
                 * @memberof transit_realtime.TripUpdate
                 * @interface IStopTimeEvent
                 * @property {number|null} [delay] StopTimeEvent delay
                 * @property {number|Long|null} [time] StopTimeEvent time
                 * @property {number|null} [uncertainty] StopTimeEvent uncertainty
                 */
    
                /**
                 * Constructs a new StopTimeEvent.
                 * @memberof transit_realtime.TripUpdate
                 * @classdesc Represents a StopTimeEvent.
                 * @implements IStopTimeEvent
                 * @constructor
                 * @param {transit_realtime.TripUpdate.IStopTimeEvent=} [properties] Properties to set
                 */
                function StopTimeEvent(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * StopTimeEvent delay.
                 * @member {number} delay
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @instance
                 */
                StopTimeEvent.prototype.delay = 0;
    
                /**
                 * StopTimeEvent time.
                 * @member {number|Long} time
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @instance
                 */
                StopTimeEvent.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * StopTimeEvent uncertainty.
                 * @member {number} uncertainty
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @instance
                 */
                StopTimeEvent.prototype.uncertainty = 0;
    
                /**
                 * Creates a new StopTimeEvent instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @static
                 * @param {transit_realtime.TripUpdate.IStopTimeEvent=} [properties] Properties to set
                 * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent instance
                 */
                StopTimeEvent.create = function create(properties) {
                    return new StopTimeEvent(properties);
                };
    
                /**
                 * Decodes a StopTimeEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StopTimeEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.StopTimeEvent();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.delay = reader.int32();
                                break;
                            }
                        case 2: {
                                message.time = reader.int64();
                                break;
                            }
                        case 3: {
                                message.uncertainty = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a StopTimeEvent message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StopTimeEvent.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a StopTimeEvent message.
                 * @function verify
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StopTimeEvent.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.delay != null && message.hasOwnProperty("delay"))
                        if (!$util.isInteger(message.delay))
                            return "delay: integer expected";
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                            return "time: integer|Long expected";
                    if (message.uncertainty != null && message.hasOwnProperty("uncertainty"))
                        if (!$util.isInteger(message.uncertainty))
                            return "uncertainty: integer expected";
                    return null;
                };
    
                /**
                 * Creates a StopTimeEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
                 */
                StopTimeEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TripUpdate.StopTimeEvent)
                        return object;
                    var message = new $root.transit_realtime.TripUpdate.StopTimeEvent();
                    if (object.delay != null)
                        message.delay = object.delay | 0;
                    if (object.time != null)
                        if ($util.Long)
                            (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                        else if (typeof object.time === "string")
                            message.time = parseInt(object.time, 10);
                        else if (typeof object.time === "number")
                            message.time = object.time;
                        else if (typeof object.time === "object")
                            message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
                    if (object.uncertainty != null)
                        message.uncertainty = object.uncertainty | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a StopTimeEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @static
                 * @param {transit_realtime.TripUpdate.StopTimeEvent} message StopTimeEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StopTimeEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.delay = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.time = options.longs === String ? "0" : 0;
                        object.uncertainty = 0;
                    }
                    if (message.delay != null && message.hasOwnProperty("delay"))
                        object.delay = message.delay;
                    if (message.time != null && message.hasOwnProperty("time"))
                        if (typeof message.time === "number")
                            object.time = options.longs === String ? String(message.time) : message.time;
                        else
                            object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
                    if (message.uncertainty != null && message.hasOwnProperty("uncertainty"))
                        object.uncertainty = message.uncertainty;
                    return object;
                };
    
                /**
                 * Converts this StopTimeEvent to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StopTimeEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for StopTimeEvent
                 * @function getTypeUrl
                 * @memberof transit_realtime.TripUpdate.StopTimeEvent
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                StopTimeEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TripUpdate.StopTimeEvent";
                };
    
                return StopTimeEvent;
            })();
    
            TripUpdate.StopTimeUpdate = (function() {
    
                /**
                 * Properties of a StopTimeUpdate.
                 * @memberof transit_realtime.TripUpdate
                 * @interface IStopTimeUpdate
                 * @property {number|null} [stopSequence] StopTimeUpdate stopSequence
                 * @property {string|null} [stopId] StopTimeUpdate stopId
                 * @property {transit_realtime.TripUpdate.IStopTimeEvent|null} [arrival] StopTimeUpdate arrival
                 * @property {transit_realtime.TripUpdate.IStopTimeEvent|null} [departure] StopTimeUpdate departure
                 * @property {transit_realtime.VehiclePosition.OccupancyStatus|null} [departureOccupancyStatus] StopTimeUpdate departureOccupancyStatus
                 * @property {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship|null} [scheduleRelationship] StopTimeUpdate scheduleRelationship
                 * @property {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties|null} [stopTimeProperties] StopTimeUpdate stopTimeProperties
                 */
    
                /**
                 * Constructs a new StopTimeUpdate.
                 * @memberof transit_realtime.TripUpdate
                 * @classdesc Represents a StopTimeUpdate.
                 * @implements IStopTimeUpdate
                 * @constructor
                 * @param {transit_realtime.TripUpdate.IStopTimeUpdate=} [properties] Properties to set
                 */
                function StopTimeUpdate(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * StopTimeUpdate stopSequence.
                 * @member {number} stopSequence
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 */
                StopTimeUpdate.prototype.stopSequence = 0;
    
                /**
                 * StopTimeUpdate stopId.
                 * @member {string} stopId
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 */
                StopTimeUpdate.prototype.stopId = "";
    
                /**
                 * StopTimeUpdate arrival.
                 * @member {transit_realtime.TripUpdate.IStopTimeEvent|null|undefined} arrival
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 */
                StopTimeUpdate.prototype.arrival = null;
    
                /**
                 * StopTimeUpdate departure.
                 * @member {transit_realtime.TripUpdate.IStopTimeEvent|null|undefined} departure
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 */
                StopTimeUpdate.prototype.departure = null;
    
                /**
                 * StopTimeUpdate departureOccupancyStatus.
                 * @member {transit_realtime.VehiclePosition.OccupancyStatus} departureOccupancyStatus
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 */
                StopTimeUpdate.prototype.departureOccupancyStatus = 0;
    
                /**
                 * StopTimeUpdate scheduleRelationship.
                 * @member {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship} scheduleRelationship
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 */
                StopTimeUpdate.prototype.scheduleRelationship = 0;
    
                /**
                 * StopTimeUpdate stopTimeProperties.
                 * @member {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties|null|undefined} stopTimeProperties
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 */
                StopTimeUpdate.prototype.stopTimeProperties = null;
    
                /**
                 * Creates a new StopTimeUpdate instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @static
                 * @param {transit_realtime.TripUpdate.IStopTimeUpdate=} [properties] Properties to set
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate instance
                 */
                StopTimeUpdate.create = function create(properties) {
                    return new StopTimeUpdate(properties);
                };
    
                /**
                 * Decodes a StopTimeUpdate message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StopTimeUpdate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.StopTimeUpdate();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.stopSequence = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.stopId = reader.string();
                                break;
                            }
                        case 2: {
                                message.arrival = $root.transit_realtime.TripUpdate.StopTimeEvent.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.departure = $root.transit_realtime.TripUpdate.StopTimeEvent.decode(reader, reader.uint32());
                                break;
                            }
                        case 7: {
                                message.departureOccupancyStatus = reader.int32();
                                break;
                            }
                        case 5: {
                                message.scheduleRelationship = reader.int32();
                                break;
                            }
                        case 6: {
                                message.stopTimeProperties = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a StopTimeUpdate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StopTimeUpdate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a StopTimeUpdate message.
                 * @function verify
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StopTimeUpdate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.stopSequence != null && message.hasOwnProperty("stopSequence"))
                        if (!$util.isInteger(message.stopSequence))
                            return "stopSequence: integer expected";
                    if (message.stopId != null && message.hasOwnProperty("stopId"))
                        if (!$util.isString(message.stopId))
                            return "stopId: string expected";
                    if (message.arrival != null && message.hasOwnProperty("arrival")) {
                        var error = $root.transit_realtime.TripUpdate.StopTimeEvent.verify(message.arrival);
                        if (error)
                            return "arrival." + error;
                    }
                    if (message.departure != null && message.hasOwnProperty("departure")) {
                        var error = $root.transit_realtime.TripUpdate.StopTimeEvent.verify(message.departure);
                        if (error)
                            return "departure." + error;
                    }
                    if (message.departureOccupancyStatus != null && message.hasOwnProperty("departureOccupancyStatus"))
                        switch (message.departureOccupancyStatus) {
                        default:
                            return "departureOccupancyStatus: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            break;
                        }
                    if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                        switch (message.scheduleRelationship) {
                        default:
                            return "scheduleRelationship: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.stopTimeProperties != null && message.hasOwnProperty("stopTimeProperties")) {
                        var error = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.verify(message.stopTimeProperties);
                        if (error)
                            return "stopTimeProperties." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a StopTimeUpdate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
                 */
                StopTimeUpdate.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TripUpdate.StopTimeUpdate)
                        return object;
                    var message = new $root.transit_realtime.TripUpdate.StopTimeUpdate();
                    if (object.stopSequence != null)
                        message.stopSequence = object.stopSequence >>> 0;
                    if (object.stopId != null)
                        message.stopId = String(object.stopId);
                    if (object.arrival != null) {
                        if (typeof object.arrival !== "object")
                            throw TypeError(".transit_realtime.TripUpdate.StopTimeUpdate.arrival: object expected");
                        message.arrival = $root.transit_realtime.TripUpdate.StopTimeEvent.fromObject(object.arrival);
                    }
                    if (object.departure != null) {
                        if (typeof object.departure !== "object")
                            throw TypeError(".transit_realtime.TripUpdate.StopTimeUpdate.departure: object expected");
                        message.departure = $root.transit_realtime.TripUpdate.StopTimeEvent.fromObject(object.departure);
                    }
                    switch (object.departureOccupancyStatus) {
                    default:
                        if (typeof object.departureOccupancyStatus === "number") {
                            message.departureOccupancyStatus = object.departureOccupancyStatus;
                            break;
                        }
                        break;
                    case "EMPTY":
                    case 0:
                        message.departureOccupancyStatus = 0;
                        break;
                    case "MANY_SEATS_AVAILABLE":
                    case 1:
                        message.departureOccupancyStatus = 1;
                        break;
                    case "FEW_SEATS_AVAILABLE":
                    case 2:
                        message.departureOccupancyStatus = 2;
                        break;
                    case "STANDING_ROOM_ONLY":
                    case 3:
                        message.departureOccupancyStatus = 3;
                        break;
                    case "CRUSHED_STANDING_ROOM_ONLY":
                    case 4:
                        message.departureOccupancyStatus = 4;
                        break;
                    case "FULL":
                    case 5:
                        message.departureOccupancyStatus = 5;
                        break;
                    case "NOT_ACCEPTING_PASSENGERS":
                    case 6:
                        message.departureOccupancyStatus = 6;
                        break;
                    case "NO_DATA_AVAILABLE":
                    case 7:
                        message.departureOccupancyStatus = 7;
                        break;
                    case "NOT_BOARDABLE":
                    case 8:
                        message.departureOccupancyStatus = 8;
                        break;
                    }
                    switch (object.scheduleRelationship) {
                    default:
                        if (typeof object.scheduleRelationship === "number") {
                            message.scheduleRelationship = object.scheduleRelationship;
                            break;
                        }
                        break;
                    case "SCHEDULED":
                    case 0:
                        message.scheduleRelationship = 0;
                        break;
                    case "SKIPPED":
                    case 1:
                        message.scheduleRelationship = 1;
                        break;
                    case "NO_DATA":
                    case 2:
                        message.scheduleRelationship = 2;
                        break;
                    case "UNSCHEDULED":
                    case 3:
                        message.scheduleRelationship = 3;
                        break;
                    }
                    if (object.stopTimeProperties != null) {
                        if (typeof object.stopTimeProperties !== "object")
                            throw TypeError(".transit_realtime.TripUpdate.StopTimeUpdate.stopTimeProperties: object expected");
                        message.stopTimeProperties = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.fromObject(object.stopTimeProperties);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a StopTimeUpdate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @static
                 * @param {transit_realtime.TripUpdate.StopTimeUpdate} message StopTimeUpdate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StopTimeUpdate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.stopSequence = 0;
                        object.arrival = null;
                        object.departure = null;
                        object.stopId = "";
                        object.scheduleRelationship = options.enums === String ? "SCHEDULED" : 0;
                        object.stopTimeProperties = null;
                        object.departureOccupancyStatus = options.enums === String ? "EMPTY" : 0;
                    }
                    if (message.stopSequence != null && message.hasOwnProperty("stopSequence"))
                        object.stopSequence = message.stopSequence;
                    if (message.arrival != null && message.hasOwnProperty("arrival"))
                        object.arrival = $root.transit_realtime.TripUpdate.StopTimeEvent.toObject(message.arrival, options);
                    if (message.departure != null && message.hasOwnProperty("departure"))
                        object.departure = $root.transit_realtime.TripUpdate.StopTimeEvent.toObject(message.departure, options);
                    if (message.stopId != null && message.hasOwnProperty("stopId"))
                        object.stopId = message.stopId;
                    if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                        object.scheduleRelationship = options.enums === String ? $root.transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship[message.scheduleRelationship] === undefined ? message.scheduleRelationship : $root.transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship[message.scheduleRelationship] : message.scheduleRelationship;
                    if (message.stopTimeProperties != null && message.hasOwnProperty("stopTimeProperties"))
                        object.stopTimeProperties = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.toObject(message.stopTimeProperties, options);
                    if (message.departureOccupancyStatus != null && message.hasOwnProperty("departureOccupancyStatus"))
                        object.departureOccupancyStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.OccupancyStatus[message.departureOccupancyStatus] === undefined ? message.departureOccupancyStatus : $root.transit_realtime.VehiclePosition.OccupancyStatus[message.departureOccupancyStatus] : message.departureOccupancyStatus;
                    return object;
                };
    
                /**
                 * Converts this StopTimeUpdate to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StopTimeUpdate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for StopTimeUpdate
                 * @function getTypeUrl
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                StopTimeUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TripUpdate.StopTimeUpdate";
                };
    
                /**
                 * ScheduleRelationship enum.
                 * @name transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship
                 * @enum {number}
                 * @property {number} SCHEDULED=0 SCHEDULED value
                 * @property {number} SKIPPED=1 SKIPPED value
                 * @property {number} NO_DATA=2 NO_DATA value
                 * @property {number} UNSCHEDULED=3 UNSCHEDULED value
                 */
                StopTimeUpdate.ScheduleRelationship = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SCHEDULED"] = 0;
                    values[valuesById[1] = "SKIPPED"] = 1;
                    values[valuesById[2] = "NO_DATA"] = 2;
                    values[valuesById[3] = "UNSCHEDULED"] = 3;
                    return values;
                })();
    
                StopTimeUpdate.StopTimeProperties = (function() {
    
                    /**
                     * Properties of a StopTimeProperties.
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                     * @interface IStopTimeProperties
                     * @property {string|null} [assignedStopId] StopTimeProperties assignedStopId
                     */
    
                    /**
                     * Constructs a new StopTimeProperties.
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                     * @classdesc Represents a StopTimeProperties.
                     * @implements IStopTimeProperties
                     * @constructor
                     * @param {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties=} [properties] Properties to set
                     */
                    function StopTimeProperties(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * StopTimeProperties assignedStopId.
                     * @member {string} assignedStopId
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @instance
                     */
                    StopTimeProperties.prototype.assignedStopId = "";
    
                    /**
                     * Creates a new StopTimeProperties instance using the specified properties.
                     * @function create
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @static
                     * @param {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties=} [properties] Properties to set
                     * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties instance
                     */
                    StopTimeProperties.create = function create(properties) {
                        return new StopTimeProperties(properties);
                    };
    
                    /**
                     * Decodes a StopTimeProperties message from the specified reader or buffer.
                     * @function decode
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StopTimeProperties.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.assignedStopId = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a StopTimeProperties message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StopTimeProperties.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a StopTimeProperties message.
                     * @function verify
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StopTimeProperties.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.assignedStopId != null && message.hasOwnProperty("assignedStopId"))
                            if (!$util.isString(message.assignedStopId))
                                return "assignedStopId: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a StopTimeProperties message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties
                     */
                    StopTimeProperties.fromObject = function fromObject(object) {
                        if (object instanceof $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties)
                            return object;
                        var message = new $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties();
                        if (object.assignedStopId != null)
                            message.assignedStopId = String(object.assignedStopId);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a StopTimeProperties message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @static
                     * @param {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} message StopTimeProperties
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StopTimeProperties.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.assignedStopId = "";
                        if (message.assignedStopId != null && message.hasOwnProperty("assignedStopId"))
                            object.assignedStopId = message.assignedStopId;
                        return object;
                    };
    
                    /**
                     * Converts this StopTimeProperties to JSON.
                     * @function toJSON
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StopTimeProperties.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for StopTimeProperties
                     * @function getTypeUrl
                     * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    StopTimeProperties.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties";
                    };
    
                    return StopTimeProperties;
                })();
    
                return StopTimeUpdate;
            })();
    
            TripUpdate.TripProperties = (function() {
    
                /**
                 * Properties of a TripProperties.
                 * @memberof transit_realtime.TripUpdate
                 * @interface ITripProperties
                 * @property {string|null} [tripId] TripProperties tripId
                 * @property {string|null} [startDate] TripProperties startDate
                 * @property {string|null} [startTime] TripProperties startTime
                 * @property {string|null} [shapeId] TripProperties shapeId
                 */
    
                /**
                 * Constructs a new TripProperties.
                 * @memberof transit_realtime.TripUpdate
                 * @classdesc Represents a TripProperties.
                 * @implements ITripProperties
                 * @constructor
                 * @param {transit_realtime.TripUpdate.ITripProperties=} [properties] Properties to set
                 */
                function TripProperties(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * TripProperties tripId.
                 * @member {string} tripId
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @instance
                 */
                TripProperties.prototype.tripId = "";
    
                /**
                 * TripProperties startDate.
                 * @member {string} startDate
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @instance
                 */
                TripProperties.prototype.startDate = "";
    
                /**
                 * TripProperties startTime.
                 * @member {string} startTime
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @instance
                 */
                TripProperties.prototype.startTime = "";
    
                /**
                 * TripProperties shapeId.
                 * @member {string} shapeId
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @instance
                 */
                TripProperties.prototype.shapeId = "";
    
                /**
                 * Creates a new TripProperties instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @static
                 * @param {transit_realtime.TripUpdate.ITripProperties=} [properties] Properties to set
                 * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties instance
                 */
                TripProperties.create = function create(properties) {
                    return new TripProperties(properties);
                };
    
                /**
                 * Decodes a TripProperties message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TripProperties.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.TripProperties();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.tripId = reader.string();
                                break;
                            }
                        case 2: {
                                message.startDate = reader.string();
                                break;
                            }
                        case 3: {
                                message.startTime = reader.string();
                                break;
                            }
                        case 4: {
                                message.shapeId = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a TripProperties message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TripProperties.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a TripProperties message.
                 * @function verify
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TripProperties.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tripId != null && message.hasOwnProperty("tripId"))
                        if (!$util.isString(message.tripId))
                            return "tripId: string expected";
                    if (message.startDate != null && message.hasOwnProperty("startDate"))
                        if (!$util.isString(message.startDate))
                            return "startDate: string expected";
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        if (!$util.isString(message.startTime))
                            return "startTime: string expected";
                    if (message.shapeId != null && message.hasOwnProperty("shapeId"))
                        if (!$util.isString(message.shapeId))
                            return "shapeId: string expected";
                    return null;
                };
    
                /**
                 * Creates a TripProperties message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties
                 */
                TripProperties.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TripUpdate.TripProperties)
                        return object;
                    var message = new $root.transit_realtime.TripUpdate.TripProperties();
                    if (object.tripId != null)
                        message.tripId = String(object.tripId);
                    if (object.startDate != null)
                        message.startDate = String(object.startDate);
                    if (object.startTime != null)
                        message.startTime = String(object.startTime);
                    if (object.shapeId != null)
                        message.shapeId = String(object.shapeId);
                    return message;
                };
    
                /**
                 * Creates a plain object from a TripProperties message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @static
                 * @param {transit_realtime.TripUpdate.TripProperties} message TripProperties
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TripProperties.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.tripId = "";
                        object.startDate = "";
                        object.startTime = "";
                        object.shapeId = "";
                    }
                    if (message.tripId != null && message.hasOwnProperty("tripId"))
                        object.tripId = message.tripId;
                    if (message.startDate != null && message.hasOwnProperty("startDate"))
                        object.startDate = message.startDate;
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        object.startTime = message.startTime;
                    if (message.shapeId != null && message.hasOwnProperty("shapeId"))
                        object.shapeId = message.shapeId;
                    return object;
                };
    
                /**
                 * Converts this TripProperties to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TripProperties.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for TripProperties
                 * @function getTypeUrl
                 * @memberof transit_realtime.TripUpdate.TripProperties
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                TripProperties.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TripUpdate.TripProperties";
                };
    
                return TripProperties;
            })();
    
            return TripUpdate;
        })();
    
        transit_realtime.VehiclePosition = (function() {
    
            /**
             * Properties of a VehiclePosition.
             * @memberof transit_realtime
             * @interface IVehiclePosition
             * @property {transit_realtime.ITripDescriptor|null} [trip] VehiclePosition trip
             * @property {transit_realtime.IVehicleDescriptor|null} [vehicle] VehiclePosition vehicle
             * @property {transit_realtime.IPosition|null} [position] VehiclePosition position
             * @property {number|null} [currentStopSequence] VehiclePosition currentStopSequence
             * @property {string|null} [stopId] VehiclePosition stopId
             * @property {transit_realtime.VehiclePosition.VehicleStopStatus|null} [currentStatus] VehiclePosition currentStatus
             * @property {number|Long|null} [timestamp] VehiclePosition timestamp
             * @property {transit_realtime.VehiclePosition.CongestionLevel|null} [congestionLevel] VehiclePosition congestionLevel
             * @property {transit_realtime.VehiclePosition.OccupancyStatus|null} [occupancyStatus] VehiclePosition occupancyStatus
             * @property {number|null} [occupancyPercentage] VehiclePosition occupancyPercentage
             * @property {Array.<transit_realtime.VehiclePosition.ICarriageDetails>|null} [multiCarriageDetails] VehiclePosition multiCarriageDetails
             */
    
            /**
             * Constructs a new VehiclePosition.
             * @memberof transit_realtime
             * @classdesc Represents a VehiclePosition.
             * @implements IVehiclePosition
             * @constructor
             * @param {transit_realtime.IVehiclePosition=} [properties] Properties to set
             */
            function VehiclePosition(properties) {
                this.multiCarriageDetails = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * VehiclePosition trip.
             * @member {transit_realtime.ITripDescriptor|null|undefined} trip
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.trip = null;
    
            /**
             * VehiclePosition vehicle.
             * @member {transit_realtime.IVehicleDescriptor|null|undefined} vehicle
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.vehicle = null;
    
            /**
             * VehiclePosition position.
             * @member {transit_realtime.IPosition|null|undefined} position
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.position = null;
    
            /**
             * VehiclePosition currentStopSequence.
             * @member {number} currentStopSequence
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.currentStopSequence = 0;
    
            /**
             * VehiclePosition stopId.
             * @member {string} stopId
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.stopId = "";
    
            /**
             * VehiclePosition currentStatus.
             * @member {transit_realtime.VehiclePosition.VehicleStopStatus} currentStatus
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.currentStatus = 2;
    
            /**
             * VehiclePosition timestamp.
             * @member {number|Long} timestamp
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * VehiclePosition congestionLevel.
             * @member {transit_realtime.VehiclePosition.CongestionLevel} congestionLevel
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.congestionLevel = 0;
    
            /**
             * VehiclePosition occupancyStatus.
             * @member {transit_realtime.VehiclePosition.OccupancyStatus} occupancyStatus
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.occupancyStatus = 0;
    
            /**
             * VehiclePosition occupancyPercentage.
             * @member {number} occupancyPercentage
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.occupancyPercentage = 0;
    
            /**
             * VehiclePosition multiCarriageDetails.
             * @member {Array.<transit_realtime.VehiclePosition.ICarriageDetails>} multiCarriageDetails
             * @memberof transit_realtime.VehiclePosition
             * @instance
             */
            VehiclePosition.prototype.multiCarriageDetails = $util.emptyArray;
    
            /**
             * Creates a new VehiclePosition instance using the specified properties.
             * @function create
             * @memberof transit_realtime.VehiclePosition
             * @static
             * @param {transit_realtime.IVehiclePosition=} [properties] Properties to set
             * @returns {transit_realtime.VehiclePosition} VehiclePosition instance
             */
            VehiclePosition.create = function create(properties) {
                return new VehiclePosition(properties);
            };
    
            /**
             * Decodes a VehiclePosition message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.VehiclePosition
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.VehiclePosition} VehiclePosition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VehiclePosition.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.VehiclePosition();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.trip = $root.transit_realtime.TripDescriptor.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.vehicle = $root.transit_realtime.VehicleDescriptor.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.position = $root.transit_realtime.Position.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.currentStopSequence = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.stopId = reader.string();
                            break;
                        }
                    case 4: {
                            message.currentStatus = reader.int32();
                            break;
                        }
                    case 5: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.congestionLevel = reader.int32();
                            break;
                        }
                    case 9: {
                            message.occupancyStatus = reader.int32();
                            break;
                        }
                    case 10: {
                            message.occupancyPercentage = reader.uint32();
                            break;
                        }
                    case 11: {
                            if (!(message.multiCarriageDetails && message.multiCarriageDetails.length))
                                message.multiCarriageDetails = [];
                            message.multiCarriageDetails.push($root.transit_realtime.VehiclePosition.CarriageDetails.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a VehiclePosition message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.VehiclePosition
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.VehiclePosition} VehiclePosition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VehiclePosition.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a VehiclePosition message.
             * @function verify
             * @memberof transit_realtime.VehiclePosition
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VehiclePosition.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.trip != null && message.hasOwnProperty("trip")) {
                    var error = $root.transit_realtime.TripDescriptor.verify(message.trip);
                    if (error)
                        return "trip." + error;
                }
                if (message.vehicle != null && message.hasOwnProperty("vehicle")) {
                    var error = $root.transit_realtime.VehicleDescriptor.verify(message.vehicle);
                    if (error)
                        return "vehicle." + error;
                }
                if (message.position != null && message.hasOwnProperty("position")) {
                    var error = $root.transit_realtime.Position.verify(message.position);
                    if (error)
                        return "position." + error;
                }
                if (message.currentStopSequence != null && message.hasOwnProperty("currentStopSequence"))
                    if (!$util.isInteger(message.currentStopSequence))
                        return "currentStopSequence: integer expected";
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    if (!$util.isString(message.stopId))
                        return "stopId: string expected";
                if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                    switch (message.currentStatus) {
                    default:
                        return "currentStatus: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.congestionLevel != null && message.hasOwnProperty("congestionLevel"))
                    switch (message.congestionLevel) {
                    default:
                        return "congestionLevel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                    switch (message.occupancyStatus) {
                    default:
                        return "occupancyStatus: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        break;
                    }
                if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                    if (!$util.isInteger(message.occupancyPercentage))
                        return "occupancyPercentage: integer expected";
                if (message.multiCarriageDetails != null && message.hasOwnProperty("multiCarriageDetails")) {
                    if (!Array.isArray(message.multiCarriageDetails))
                        return "multiCarriageDetails: array expected";
                    for (var i = 0; i < message.multiCarriageDetails.length; ++i) {
                        var error = $root.transit_realtime.VehiclePosition.CarriageDetails.verify(message.multiCarriageDetails[i]);
                        if (error)
                            return "multiCarriageDetails." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a VehiclePosition message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.VehiclePosition
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.VehiclePosition} VehiclePosition
             */
            VehiclePosition.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.VehiclePosition)
                    return object;
                var message = new $root.transit_realtime.VehiclePosition();
                if (object.trip != null) {
                    if (typeof object.trip !== "object")
                        throw TypeError(".transit_realtime.VehiclePosition.trip: object expected");
                    message.trip = $root.transit_realtime.TripDescriptor.fromObject(object.trip);
                }
                if (object.vehicle != null) {
                    if (typeof object.vehicle !== "object")
                        throw TypeError(".transit_realtime.VehiclePosition.vehicle: object expected");
                    message.vehicle = $root.transit_realtime.VehicleDescriptor.fromObject(object.vehicle);
                }
                if (object.position != null) {
                    if (typeof object.position !== "object")
                        throw TypeError(".transit_realtime.VehiclePosition.position: object expected");
                    message.position = $root.transit_realtime.Position.fromObject(object.position);
                }
                if (object.currentStopSequence != null)
                    message.currentStopSequence = object.currentStopSequence >>> 0;
                if (object.stopId != null)
                    message.stopId = String(object.stopId);
                switch (object.currentStatus) {
                case "INCOMING_AT":
                case 0:
                    message.currentStatus = 0;
                    break;
                case "STOPPED_AT":
                case 1:
                    message.currentStatus = 1;
                    break;
                default:
                    if (typeof object.currentStatus === "number") {
                        message.currentStatus = object.currentStatus;
                        break;
                    }
                    break;
                case "IN_TRANSIT_TO":
                case 2:
                    message.currentStatus = 2;
                    break;
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                switch (object.congestionLevel) {
                default:
                    if (typeof object.congestionLevel === "number") {
                        message.congestionLevel = object.congestionLevel;
                        break;
                    }
                    break;
                case "UNKNOWN_CONGESTION_LEVEL":
                case 0:
                    message.congestionLevel = 0;
                    break;
                case "RUNNING_SMOOTHLY":
                case 1:
                    message.congestionLevel = 1;
                    break;
                case "STOP_AND_GO":
                case 2:
                    message.congestionLevel = 2;
                    break;
                case "CONGESTION":
                case 3:
                    message.congestionLevel = 3;
                    break;
                case "SEVERE_CONGESTION":
                case 4:
                    message.congestionLevel = 4;
                    break;
                }
                switch (object.occupancyStatus) {
                default:
                    if (typeof object.occupancyStatus === "number") {
                        message.occupancyStatus = object.occupancyStatus;
                        break;
                    }
                    break;
                case "EMPTY":
                case 0:
                    message.occupancyStatus = 0;
                    break;
                case "MANY_SEATS_AVAILABLE":
                case 1:
                    message.occupancyStatus = 1;
                    break;
                case "FEW_SEATS_AVAILABLE":
                case 2:
                    message.occupancyStatus = 2;
                    break;
                case "STANDING_ROOM_ONLY":
                case 3:
                    message.occupancyStatus = 3;
                    break;
                case "CRUSHED_STANDING_ROOM_ONLY":
                case 4:
                    message.occupancyStatus = 4;
                    break;
                case "FULL":
                case 5:
                    message.occupancyStatus = 5;
                    break;
                case "NOT_ACCEPTING_PASSENGERS":
                case 6:
                    message.occupancyStatus = 6;
                    break;
                case "NO_DATA_AVAILABLE":
                case 7:
                    message.occupancyStatus = 7;
                    break;
                case "NOT_BOARDABLE":
                case 8:
                    message.occupancyStatus = 8;
                    break;
                }
                if (object.occupancyPercentage != null)
                    message.occupancyPercentage = object.occupancyPercentage >>> 0;
                if (object.multiCarriageDetails) {
                    if (!Array.isArray(object.multiCarriageDetails))
                        throw TypeError(".transit_realtime.VehiclePosition.multiCarriageDetails: array expected");
                    message.multiCarriageDetails = [];
                    for (var i = 0; i < object.multiCarriageDetails.length; ++i) {
                        if (typeof object.multiCarriageDetails[i] !== "object")
                            throw TypeError(".transit_realtime.VehiclePosition.multiCarriageDetails: object expected");
                        message.multiCarriageDetails[i] = $root.transit_realtime.VehiclePosition.CarriageDetails.fromObject(object.multiCarriageDetails[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a VehiclePosition message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.VehiclePosition
             * @static
             * @param {transit_realtime.VehiclePosition} message VehiclePosition
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VehiclePosition.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.multiCarriageDetails = [];
                if (options.defaults) {
                    object.trip = null;
                    object.position = null;
                    object.currentStopSequence = 0;
                    object.currentStatus = options.enums === String ? "IN_TRANSIT_TO" : 2;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    object.congestionLevel = options.enums === String ? "UNKNOWN_CONGESTION_LEVEL" : 0;
                    object.stopId = "";
                    object.vehicle = null;
                    object.occupancyStatus = options.enums === String ? "EMPTY" : 0;
                    object.occupancyPercentage = 0;
                }
                if (message.trip != null && message.hasOwnProperty("trip"))
                    object.trip = $root.transit_realtime.TripDescriptor.toObject(message.trip, options);
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = $root.transit_realtime.Position.toObject(message.position, options);
                if (message.currentStopSequence != null && message.hasOwnProperty("currentStopSequence"))
                    object.currentStopSequence = message.currentStopSequence;
                if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                    object.currentStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.VehicleStopStatus[message.currentStatus] === undefined ? message.currentStatus : $root.transit_realtime.VehiclePosition.VehicleStopStatus[message.currentStatus] : message.currentStatus;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (message.congestionLevel != null && message.hasOwnProperty("congestionLevel"))
                    object.congestionLevel = options.enums === String ? $root.transit_realtime.VehiclePosition.CongestionLevel[message.congestionLevel] === undefined ? message.congestionLevel : $root.transit_realtime.VehiclePosition.CongestionLevel[message.congestionLevel] : message.congestionLevel;
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    object.stopId = message.stopId;
                if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                    object.vehicle = $root.transit_realtime.VehicleDescriptor.toObject(message.vehicle, options);
                if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                    object.occupancyStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.OccupancyStatus[message.occupancyStatus] === undefined ? message.occupancyStatus : $root.transit_realtime.VehiclePosition.OccupancyStatus[message.occupancyStatus] : message.occupancyStatus;
                if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                    object.occupancyPercentage = message.occupancyPercentage;
                if (message.multiCarriageDetails && message.multiCarriageDetails.length) {
                    object.multiCarriageDetails = [];
                    for (var j = 0; j < message.multiCarriageDetails.length; ++j)
                        object.multiCarriageDetails[j] = $root.transit_realtime.VehiclePosition.CarriageDetails.toObject(message.multiCarriageDetails[j], options);
                }
                return object;
            };
    
            /**
             * Converts this VehiclePosition to JSON.
             * @function toJSON
             * @memberof transit_realtime.VehiclePosition
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VehiclePosition.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for VehiclePosition
             * @function getTypeUrl
             * @memberof transit_realtime.VehiclePosition
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VehiclePosition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.VehiclePosition";
            };
    
            /**
             * VehicleStopStatus enum.
             * @name transit_realtime.VehiclePosition.VehicleStopStatus
             * @enum {number}
             * @property {number} INCOMING_AT=0 INCOMING_AT value
             * @property {number} STOPPED_AT=1 STOPPED_AT value
             * @property {number} IN_TRANSIT_TO=2 IN_TRANSIT_TO value
             */
            VehiclePosition.VehicleStopStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INCOMING_AT"] = 0;
                values[valuesById[1] = "STOPPED_AT"] = 1;
                values[valuesById[2] = "IN_TRANSIT_TO"] = 2;
                return values;
            })();
    
            /**
             * CongestionLevel enum.
             * @name transit_realtime.VehiclePosition.CongestionLevel
             * @enum {number}
             * @property {number} UNKNOWN_CONGESTION_LEVEL=0 UNKNOWN_CONGESTION_LEVEL value
             * @property {number} RUNNING_SMOOTHLY=1 RUNNING_SMOOTHLY value
             * @property {number} STOP_AND_GO=2 STOP_AND_GO value
             * @property {number} CONGESTION=3 CONGESTION value
             * @property {number} SEVERE_CONGESTION=4 SEVERE_CONGESTION value
             */
            VehiclePosition.CongestionLevel = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_CONGESTION_LEVEL"] = 0;
                values[valuesById[1] = "RUNNING_SMOOTHLY"] = 1;
                values[valuesById[2] = "STOP_AND_GO"] = 2;
                values[valuesById[3] = "CONGESTION"] = 3;
                values[valuesById[4] = "SEVERE_CONGESTION"] = 4;
                return values;
            })();
    
            /**
             * OccupancyStatus enum.
             * @name transit_realtime.VehiclePosition.OccupancyStatus
             * @enum {number}
             * @property {number} EMPTY=0 EMPTY value
             * @property {number} MANY_SEATS_AVAILABLE=1 MANY_SEATS_AVAILABLE value
             * @property {number} FEW_SEATS_AVAILABLE=2 FEW_SEATS_AVAILABLE value
             * @property {number} STANDING_ROOM_ONLY=3 STANDING_ROOM_ONLY value
             * @property {number} CRUSHED_STANDING_ROOM_ONLY=4 CRUSHED_STANDING_ROOM_ONLY value
             * @property {number} FULL=5 FULL value
             * @property {number} NOT_ACCEPTING_PASSENGERS=6 NOT_ACCEPTING_PASSENGERS value
             * @property {number} NO_DATA_AVAILABLE=7 NO_DATA_AVAILABLE value
             * @property {number} NOT_BOARDABLE=8 NOT_BOARDABLE value
             */
            VehiclePosition.OccupancyStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EMPTY"] = 0;
                values[valuesById[1] = "MANY_SEATS_AVAILABLE"] = 1;
                values[valuesById[2] = "FEW_SEATS_AVAILABLE"] = 2;
                values[valuesById[3] = "STANDING_ROOM_ONLY"] = 3;
                values[valuesById[4] = "CRUSHED_STANDING_ROOM_ONLY"] = 4;
                values[valuesById[5] = "FULL"] = 5;
                values[valuesById[6] = "NOT_ACCEPTING_PASSENGERS"] = 6;
                values[valuesById[7] = "NO_DATA_AVAILABLE"] = 7;
                values[valuesById[8] = "NOT_BOARDABLE"] = 8;
                return values;
            })();
    
            VehiclePosition.CarriageDetails = (function() {
    
                /**
                 * Properties of a CarriageDetails.
                 * @memberof transit_realtime.VehiclePosition
                 * @interface ICarriageDetails
                 * @property {string|null} [id] CarriageDetails id
                 * @property {string|null} [label] CarriageDetails label
                 * @property {transit_realtime.VehiclePosition.OccupancyStatus|null} [occupancyStatus] CarriageDetails occupancyStatus
                 * @property {number|null} [occupancyPercentage] CarriageDetails occupancyPercentage
                 * @property {number|null} [carriageSequence] CarriageDetails carriageSequence
                 */
    
                /**
                 * Constructs a new CarriageDetails.
                 * @memberof transit_realtime.VehiclePosition
                 * @classdesc Represents a CarriageDetails.
                 * @implements ICarriageDetails
                 * @constructor
                 * @param {transit_realtime.VehiclePosition.ICarriageDetails=} [properties] Properties to set
                 */
                function CarriageDetails(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CarriageDetails id.
                 * @member {string} id
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @instance
                 */
                CarriageDetails.prototype.id = "";
    
                /**
                 * CarriageDetails label.
                 * @member {string} label
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @instance
                 */
                CarriageDetails.prototype.label = "";
    
                /**
                 * CarriageDetails occupancyStatus.
                 * @member {transit_realtime.VehiclePosition.OccupancyStatus} occupancyStatus
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @instance
                 */
                CarriageDetails.prototype.occupancyStatus = 7;
    
                /**
                 * CarriageDetails occupancyPercentage.
                 * @member {number} occupancyPercentage
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @instance
                 */
                CarriageDetails.prototype.occupancyPercentage = -1;
    
                /**
                 * CarriageDetails carriageSequence.
                 * @member {number} carriageSequence
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @instance
                 */
                CarriageDetails.prototype.carriageSequence = 0;
    
                /**
                 * Creates a new CarriageDetails instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @static
                 * @param {transit_realtime.VehiclePosition.ICarriageDetails=} [properties] Properties to set
                 * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails instance
                 */
                CarriageDetails.create = function create(properties) {
                    return new CarriageDetails(properties);
                };
    
                /**
                 * Decodes a CarriageDetails message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CarriageDetails.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.VehiclePosition.CarriageDetails();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.label = reader.string();
                                break;
                            }
                        case 3: {
                                message.occupancyStatus = reader.int32();
                                break;
                            }
                        case 4: {
                                message.occupancyPercentage = reader.int32();
                                break;
                            }
                        case 5: {
                                message.carriageSequence = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CarriageDetails message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CarriageDetails.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CarriageDetails message.
                 * @function verify
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CarriageDetails.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        if (!$util.isString(message.label))
                            return "label: string expected";
                    if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                        switch (message.occupancyStatus) {
                        default:
                            return "occupancyStatus: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            break;
                        }
                    if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                        if (!$util.isInteger(message.occupancyPercentage))
                            return "occupancyPercentage: integer expected";
                    if (message.carriageSequence != null && message.hasOwnProperty("carriageSequence"))
                        if (!$util.isInteger(message.carriageSequence))
                            return "carriageSequence: integer expected";
                    return null;
                };
    
                /**
                 * Creates a CarriageDetails message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails
                 */
                CarriageDetails.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.VehiclePosition.CarriageDetails)
                        return object;
                    var message = new $root.transit_realtime.VehiclePosition.CarriageDetails();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.label != null)
                        message.label = String(object.label);
                    switch (object.occupancyStatus) {
                    case "EMPTY":
                    case 0:
                        message.occupancyStatus = 0;
                        break;
                    case "MANY_SEATS_AVAILABLE":
                    case 1:
                        message.occupancyStatus = 1;
                        break;
                    case "FEW_SEATS_AVAILABLE":
                    case 2:
                        message.occupancyStatus = 2;
                        break;
                    case "STANDING_ROOM_ONLY":
                    case 3:
                        message.occupancyStatus = 3;
                        break;
                    case "CRUSHED_STANDING_ROOM_ONLY":
                    case 4:
                        message.occupancyStatus = 4;
                        break;
                    case "FULL":
                    case 5:
                        message.occupancyStatus = 5;
                        break;
                    case "NOT_ACCEPTING_PASSENGERS":
                    case 6:
                        message.occupancyStatus = 6;
                        break;
                    default:
                        if (typeof object.occupancyStatus === "number") {
                            message.occupancyStatus = object.occupancyStatus;
                            break;
                        }
                        break;
                    case "NO_DATA_AVAILABLE":
                    case 7:
                        message.occupancyStatus = 7;
                        break;
                    case "NOT_BOARDABLE":
                    case 8:
                        message.occupancyStatus = 8;
                        break;
                    }
                    if (object.occupancyPercentage != null)
                        message.occupancyPercentage = object.occupancyPercentage | 0;
                    if (object.carriageSequence != null)
                        message.carriageSequence = object.carriageSequence >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a CarriageDetails message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @static
                 * @param {transit_realtime.VehiclePosition.CarriageDetails} message CarriageDetails
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CarriageDetails.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.label = "";
                        object.occupancyStatus = options.enums === String ? "NO_DATA_AVAILABLE" : 7;
                        object.occupancyPercentage = -1;
                        object.carriageSequence = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = message.label;
                    if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                        object.occupancyStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.OccupancyStatus[message.occupancyStatus] === undefined ? message.occupancyStatus : $root.transit_realtime.VehiclePosition.OccupancyStatus[message.occupancyStatus] : message.occupancyStatus;
                    if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                        object.occupancyPercentage = message.occupancyPercentage;
                    if (message.carriageSequence != null && message.hasOwnProperty("carriageSequence"))
                        object.carriageSequence = message.carriageSequence;
                    return object;
                };
    
                /**
                 * Converts this CarriageDetails to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CarriageDetails.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CarriageDetails
                 * @function getTypeUrl
                 * @memberof transit_realtime.VehiclePosition.CarriageDetails
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CarriageDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.VehiclePosition.CarriageDetails";
                };
    
                return CarriageDetails;
            })();
    
            return VehiclePosition;
        })();
    
        transit_realtime.Alert = (function() {
    
            /**
             * Properties of an Alert.
             * @memberof transit_realtime
             * @interface IAlert
             * @property {Array.<transit_realtime.ITimeRange>|null} [activePeriod] Alert activePeriod
             * @property {Array.<transit_realtime.IEntitySelector>|null} [informedEntity] Alert informedEntity
             * @property {transit_realtime.Alert.Cause|null} [cause] Alert cause
             * @property {transit_realtime.Alert.Effect|null} [effect] Alert effect
             * @property {transit_realtime.ITranslatedString|null} [url] Alert url
             * @property {transit_realtime.ITranslatedString|null} [headerText] Alert headerText
             * @property {transit_realtime.ITranslatedString|null} [descriptionText] Alert descriptionText
             * @property {transit_realtime.ITranslatedString|null} [ttsHeaderText] Alert ttsHeaderText
             * @property {transit_realtime.ITranslatedString|null} [ttsDescriptionText] Alert ttsDescriptionText
             * @property {transit_realtime.Alert.SeverityLevel|null} [severityLevel] Alert severityLevel
             * @property {transit_realtime.ITranslatedImage|null} [image] Alert image
             * @property {transit_realtime.ITranslatedString|null} [imageAlternativeText] Alert imageAlternativeText
             * @property {transit_realtime.ITranslatedString|null} [causeDetail] Alert causeDetail
             * @property {transit_realtime.ITranslatedString|null} [effectDetail] Alert effectDetail
             */
    
            /**
             * Constructs a new Alert.
             * @memberof transit_realtime
             * @classdesc Represents an Alert.
             * @implements IAlert
             * @constructor
             * @param {transit_realtime.IAlert=} [properties] Properties to set
             */
            function Alert(properties) {
                this.activePeriod = [];
                this.informedEntity = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Alert activePeriod.
             * @member {Array.<transit_realtime.ITimeRange>} activePeriod
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.activePeriod = $util.emptyArray;
    
            /**
             * Alert informedEntity.
             * @member {Array.<transit_realtime.IEntitySelector>} informedEntity
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.informedEntity = $util.emptyArray;
    
            /**
             * Alert cause.
             * @member {transit_realtime.Alert.Cause} cause
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.cause = 1;
    
            /**
             * Alert effect.
             * @member {transit_realtime.Alert.Effect} effect
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.effect = 8;
    
            /**
             * Alert url.
             * @member {transit_realtime.ITranslatedString|null|undefined} url
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.url = null;
    
            /**
             * Alert headerText.
             * @member {transit_realtime.ITranslatedString|null|undefined} headerText
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.headerText = null;
    
            /**
             * Alert descriptionText.
             * @member {transit_realtime.ITranslatedString|null|undefined} descriptionText
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.descriptionText = null;
    
            /**
             * Alert ttsHeaderText.
             * @member {transit_realtime.ITranslatedString|null|undefined} ttsHeaderText
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.ttsHeaderText = null;
    
            /**
             * Alert ttsDescriptionText.
             * @member {transit_realtime.ITranslatedString|null|undefined} ttsDescriptionText
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.ttsDescriptionText = null;
    
            /**
             * Alert severityLevel.
             * @member {transit_realtime.Alert.SeverityLevel} severityLevel
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.severityLevel = 1;
    
            /**
             * Alert image.
             * @member {transit_realtime.ITranslatedImage|null|undefined} image
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.image = null;
    
            /**
             * Alert imageAlternativeText.
             * @member {transit_realtime.ITranslatedString|null|undefined} imageAlternativeText
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.imageAlternativeText = null;
    
            /**
             * Alert causeDetail.
             * @member {transit_realtime.ITranslatedString|null|undefined} causeDetail
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.causeDetail = null;
    
            /**
             * Alert effectDetail.
             * @member {transit_realtime.ITranslatedString|null|undefined} effectDetail
             * @memberof transit_realtime.Alert
             * @instance
             */
            Alert.prototype.effectDetail = null;
    
            /**
             * Creates a new Alert instance using the specified properties.
             * @function create
             * @memberof transit_realtime.Alert
             * @static
             * @param {transit_realtime.IAlert=} [properties] Properties to set
             * @returns {transit_realtime.Alert} Alert instance
             */
            Alert.create = function create(properties) {
                return new Alert(properties);
            };
    
            /**
             * Decodes an Alert message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.Alert
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.Alert} Alert
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Alert.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.Alert();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.activePeriod && message.activePeriod.length))
                                message.activePeriod = [];
                            message.activePeriod.push($root.transit_realtime.TimeRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.informedEntity && message.informedEntity.length))
                                message.informedEntity = [];
                            message.informedEntity.push($root.transit_realtime.EntitySelector.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            message.cause = reader.int32();
                            break;
                        }
                    case 7: {
                            message.effect = reader.int32();
                            break;
                        }
                    case 8: {
                            message.url = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.headerText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.descriptionText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.ttsHeaderText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.ttsDescriptionText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 14: {
                            message.severityLevel = reader.int32();
                            break;
                        }
                    case 15: {
                            message.image = $root.transit_realtime.TranslatedImage.decode(reader, reader.uint32());
                            break;
                        }
                    case 16: {
                            message.imageAlternativeText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 17: {
                            message.causeDetail = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 18: {
                            message.effectDetail = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Alert message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.Alert
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.Alert} Alert
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Alert.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Alert message.
             * @function verify
             * @memberof transit_realtime.Alert
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Alert.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.activePeriod != null && message.hasOwnProperty("activePeriod")) {
                    if (!Array.isArray(message.activePeriod))
                        return "activePeriod: array expected";
                    for (var i = 0; i < message.activePeriod.length; ++i) {
                        var error = $root.transit_realtime.TimeRange.verify(message.activePeriod[i]);
                        if (error)
                            return "activePeriod." + error;
                    }
                }
                if (message.informedEntity != null && message.hasOwnProperty("informedEntity")) {
                    if (!Array.isArray(message.informedEntity))
                        return "informedEntity: array expected";
                    for (var i = 0; i < message.informedEntity.length; ++i) {
                        var error = $root.transit_realtime.EntitySelector.verify(message.informedEntity[i]);
                        if (error)
                            return "informedEntity." + error;
                    }
                }
                if (message.cause != null && message.hasOwnProperty("cause"))
                    switch (message.cause) {
                    default:
                        return "cause: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        break;
                    }
                if (message.effect != null && message.hasOwnProperty("effect"))
                    switch (message.effect) {
                    default:
                        return "effect: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        break;
                    }
                if (message.url != null && message.hasOwnProperty("url")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.url);
                    if (error)
                        return "url." + error;
                }
                if (message.headerText != null && message.hasOwnProperty("headerText")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.headerText);
                    if (error)
                        return "headerText." + error;
                }
                if (message.descriptionText != null && message.hasOwnProperty("descriptionText")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.descriptionText);
                    if (error)
                        return "descriptionText." + error;
                }
                if (message.ttsHeaderText != null && message.hasOwnProperty("ttsHeaderText")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.ttsHeaderText);
                    if (error)
                        return "ttsHeaderText." + error;
                }
                if (message.ttsDescriptionText != null && message.hasOwnProperty("ttsDescriptionText")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.ttsDescriptionText);
                    if (error)
                        return "ttsDescriptionText." + error;
                }
                if (message.severityLevel != null && message.hasOwnProperty("severityLevel"))
                    switch (message.severityLevel) {
                    default:
                        return "severityLevel: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.image != null && message.hasOwnProperty("image")) {
                    var error = $root.transit_realtime.TranslatedImage.verify(message.image);
                    if (error)
                        return "image." + error;
                }
                if (message.imageAlternativeText != null && message.hasOwnProperty("imageAlternativeText")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.imageAlternativeText);
                    if (error)
                        return "imageAlternativeText." + error;
                }
                if (message.causeDetail != null && message.hasOwnProperty("causeDetail")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.causeDetail);
                    if (error)
                        return "causeDetail." + error;
                }
                if (message.effectDetail != null && message.hasOwnProperty("effectDetail")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.effectDetail);
                    if (error)
                        return "effectDetail." + error;
                }
                return null;
            };
    
            /**
             * Creates an Alert message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.Alert
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.Alert} Alert
             */
            Alert.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.Alert)
                    return object;
                var message = new $root.transit_realtime.Alert();
                if (object.activePeriod) {
                    if (!Array.isArray(object.activePeriod))
                        throw TypeError(".transit_realtime.Alert.activePeriod: array expected");
                    message.activePeriod = [];
                    for (var i = 0; i < object.activePeriod.length; ++i) {
                        if (typeof object.activePeriod[i] !== "object")
                            throw TypeError(".transit_realtime.Alert.activePeriod: object expected");
                        message.activePeriod[i] = $root.transit_realtime.TimeRange.fromObject(object.activePeriod[i]);
                    }
                }
                if (object.informedEntity) {
                    if (!Array.isArray(object.informedEntity))
                        throw TypeError(".transit_realtime.Alert.informedEntity: array expected");
                    message.informedEntity = [];
                    for (var i = 0; i < object.informedEntity.length; ++i) {
                        if (typeof object.informedEntity[i] !== "object")
                            throw TypeError(".transit_realtime.Alert.informedEntity: object expected");
                        message.informedEntity[i] = $root.transit_realtime.EntitySelector.fromObject(object.informedEntity[i]);
                    }
                }
                switch (object.cause) {
                default:
                    if (typeof object.cause === "number") {
                        message.cause = object.cause;
                        break;
                    }
                    break;
                case "UNKNOWN_CAUSE":
                case 1:
                    message.cause = 1;
                    break;
                case "OTHER_CAUSE":
                case 2:
                    message.cause = 2;
                    break;
                case "TECHNICAL_PROBLEM":
                case 3:
                    message.cause = 3;
                    break;
                case "STRIKE":
                case 4:
                    message.cause = 4;
                    break;
                case "DEMONSTRATION":
                case 5:
                    message.cause = 5;
                    break;
                case "ACCIDENT":
                case 6:
                    message.cause = 6;
                    break;
                case "HOLIDAY":
                case 7:
                    message.cause = 7;
                    break;
                case "WEATHER":
                case 8:
                    message.cause = 8;
                    break;
                case "MAINTENANCE":
                case 9:
                    message.cause = 9;
                    break;
                case "CONSTRUCTION":
                case 10:
                    message.cause = 10;
                    break;
                case "POLICE_ACTIVITY":
                case 11:
                    message.cause = 11;
                    break;
                case "MEDICAL_EMERGENCY":
                case 12:
                    message.cause = 12;
                    break;
                }
                switch (object.effect) {
                case "NO_SERVICE":
                case 1:
                    message.effect = 1;
                    break;
                case "REDUCED_SERVICE":
                case 2:
                    message.effect = 2;
                    break;
                case "SIGNIFICANT_DELAYS":
                case 3:
                    message.effect = 3;
                    break;
                case "DETOUR":
                case 4:
                    message.effect = 4;
                    break;
                case "ADDITIONAL_SERVICE":
                case 5:
                    message.effect = 5;
                    break;
                case "MODIFIED_SERVICE":
                case 6:
                    message.effect = 6;
                    break;
                case "OTHER_EFFECT":
                case 7:
                    message.effect = 7;
                    break;
                default:
                    if (typeof object.effect === "number") {
                        message.effect = object.effect;
                        break;
                    }
                    break;
                case "UNKNOWN_EFFECT":
                case 8:
                    message.effect = 8;
                    break;
                case "STOP_MOVED":
                case 9:
                    message.effect = 9;
                    break;
                case "NO_EFFECT":
                case 10:
                    message.effect = 10;
                    break;
                case "ACCESSIBILITY_ISSUE":
                case 11:
                    message.effect = 11;
                    break;
                }
                if (object.url != null) {
                    if (typeof object.url !== "object")
                        throw TypeError(".transit_realtime.Alert.url: object expected");
                    message.url = $root.transit_realtime.TranslatedString.fromObject(object.url);
                }
                if (object.headerText != null) {
                    if (typeof object.headerText !== "object")
                        throw TypeError(".transit_realtime.Alert.headerText: object expected");
                    message.headerText = $root.transit_realtime.TranslatedString.fromObject(object.headerText);
                }
                if (object.descriptionText != null) {
                    if (typeof object.descriptionText !== "object")
                        throw TypeError(".transit_realtime.Alert.descriptionText: object expected");
                    message.descriptionText = $root.transit_realtime.TranslatedString.fromObject(object.descriptionText);
                }
                if (object.ttsHeaderText != null) {
                    if (typeof object.ttsHeaderText !== "object")
                        throw TypeError(".transit_realtime.Alert.ttsHeaderText: object expected");
                    message.ttsHeaderText = $root.transit_realtime.TranslatedString.fromObject(object.ttsHeaderText);
                }
                if (object.ttsDescriptionText != null) {
                    if (typeof object.ttsDescriptionText !== "object")
                        throw TypeError(".transit_realtime.Alert.ttsDescriptionText: object expected");
                    message.ttsDescriptionText = $root.transit_realtime.TranslatedString.fromObject(object.ttsDescriptionText);
                }
                switch (object.severityLevel) {
                default:
                    if (typeof object.severityLevel === "number") {
                        message.severityLevel = object.severityLevel;
                        break;
                    }
                    break;
                case "UNKNOWN_SEVERITY":
                case 1:
                    message.severityLevel = 1;
                    break;
                case "INFO":
                case 2:
                    message.severityLevel = 2;
                    break;
                case "WARNING":
                case 3:
                    message.severityLevel = 3;
                    break;
                case "SEVERE":
                case 4:
                    message.severityLevel = 4;
                    break;
                }
                if (object.image != null) {
                    if (typeof object.image !== "object")
                        throw TypeError(".transit_realtime.Alert.image: object expected");
                    message.image = $root.transit_realtime.TranslatedImage.fromObject(object.image);
                }
                if (object.imageAlternativeText != null) {
                    if (typeof object.imageAlternativeText !== "object")
                        throw TypeError(".transit_realtime.Alert.imageAlternativeText: object expected");
                    message.imageAlternativeText = $root.transit_realtime.TranslatedString.fromObject(object.imageAlternativeText);
                }
                if (object.causeDetail != null) {
                    if (typeof object.causeDetail !== "object")
                        throw TypeError(".transit_realtime.Alert.causeDetail: object expected");
                    message.causeDetail = $root.transit_realtime.TranslatedString.fromObject(object.causeDetail);
                }
                if (object.effectDetail != null) {
                    if (typeof object.effectDetail !== "object")
                        throw TypeError(".transit_realtime.Alert.effectDetail: object expected");
                    message.effectDetail = $root.transit_realtime.TranslatedString.fromObject(object.effectDetail);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Alert message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.Alert
             * @static
             * @param {transit_realtime.Alert} message Alert
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Alert.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.activePeriod = [];
                    object.informedEntity = [];
                }
                if (options.defaults) {
                    object.cause = options.enums === String ? "UNKNOWN_CAUSE" : 1;
                    object.effect = options.enums === String ? "UNKNOWN_EFFECT" : 8;
                    object.url = null;
                    object.headerText = null;
                    object.descriptionText = null;
                    object.ttsHeaderText = null;
                    object.ttsDescriptionText = null;
                    object.severityLevel = options.enums === String ? "UNKNOWN_SEVERITY" : 1;
                    object.image = null;
                    object.imageAlternativeText = null;
                    object.causeDetail = null;
                    object.effectDetail = null;
                }
                if (message.activePeriod && message.activePeriod.length) {
                    object.activePeriod = [];
                    for (var j = 0; j < message.activePeriod.length; ++j)
                        object.activePeriod[j] = $root.transit_realtime.TimeRange.toObject(message.activePeriod[j], options);
                }
                if (message.informedEntity && message.informedEntity.length) {
                    object.informedEntity = [];
                    for (var j = 0; j < message.informedEntity.length; ++j)
                        object.informedEntity[j] = $root.transit_realtime.EntitySelector.toObject(message.informedEntity[j], options);
                }
                if (message.cause != null && message.hasOwnProperty("cause"))
                    object.cause = options.enums === String ? $root.transit_realtime.Alert.Cause[message.cause] === undefined ? message.cause : $root.transit_realtime.Alert.Cause[message.cause] : message.cause;
                if (message.effect != null && message.hasOwnProperty("effect"))
                    object.effect = options.enums === String ? $root.transit_realtime.Alert.Effect[message.effect] === undefined ? message.effect : $root.transit_realtime.Alert.Effect[message.effect] : message.effect;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = $root.transit_realtime.TranslatedString.toObject(message.url, options);
                if (message.headerText != null && message.hasOwnProperty("headerText"))
                    object.headerText = $root.transit_realtime.TranslatedString.toObject(message.headerText, options);
                if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                    object.descriptionText = $root.transit_realtime.TranslatedString.toObject(message.descriptionText, options);
                if (message.ttsHeaderText != null && message.hasOwnProperty("ttsHeaderText"))
                    object.ttsHeaderText = $root.transit_realtime.TranslatedString.toObject(message.ttsHeaderText, options);
                if (message.ttsDescriptionText != null && message.hasOwnProperty("ttsDescriptionText"))
                    object.ttsDescriptionText = $root.transit_realtime.TranslatedString.toObject(message.ttsDescriptionText, options);
                if (message.severityLevel != null && message.hasOwnProperty("severityLevel"))
                    object.severityLevel = options.enums === String ? $root.transit_realtime.Alert.SeverityLevel[message.severityLevel] === undefined ? message.severityLevel : $root.transit_realtime.Alert.SeverityLevel[message.severityLevel] : message.severityLevel;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = $root.transit_realtime.TranslatedImage.toObject(message.image, options);
                if (message.imageAlternativeText != null && message.hasOwnProperty("imageAlternativeText"))
                    object.imageAlternativeText = $root.transit_realtime.TranslatedString.toObject(message.imageAlternativeText, options);
                if (message.causeDetail != null && message.hasOwnProperty("causeDetail"))
                    object.causeDetail = $root.transit_realtime.TranslatedString.toObject(message.causeDetail, options);
                if (message.effectDetail != null && message.hasOwnProperty("effectDetail"))
                    object.effectDetail = $root.transit_realtime.TranslatedString.toObject(message.effectDetail, options);
                return object;
            };
    
            /**
             * Converts this Alert to JSON.
             * @function toJSON
             * @memberof transit_realtime.Alert
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Alert.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Alert
             * @function getTypeUrl
             * @memberof transit_realtime.Alert
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Alert.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.Alert";
            };
    
            /**
             * Cause enum.
             * @name transit_realtime.Alert.Cause
             * @enum {number}
             * @property {number} UNKNOWN_CAUSE=1 UNKNOWN_CAUSE value
             * @property {number} OTHER_CAUSE=2 OTHER_CAUSE value
             * @property {number} TECHNICAL_PROBLEM=3 TECHNICAL_PROBLEM value
             * @property {number} STRIKE=4 STRIKE value
             * @property {number} DEMONSTRATION=5 DEMONSTRATION value
             * @property {number} ACCIDENT=6 ACCIDENT value
             * @property {number} HOLIDAY=7 HOLIDAY value
             * @property {number} WEATHER=8 WEATHER value
             * @property {number} MAINTENANCE=9 MAINTENANCE value
             * @property {number} CONSTRUCTION=10 CONSTRUCTION value
             * @property {number} POLICE_ACTIVITY=11 POLICE_ACTIVITY value
             * @property {number} MEDICAL_EMERGENCY=12 MEDICAL_EMERGENCY value
             */
            Alert.Cause = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "UNKNOWN_CAUSE"] = 1;
                values[valuesById[2] = "OTHER_CAUSE"] = 2;
                values[valuesById[3] = "TECHNICAL_PROBLEM"] = 3;
                values[valuesById[4] = "STRIKE"] = 4;
                values[valuesById[5] = "DEMONSTRATION"] = 5;
                values[valuesById[6] = "ACCIDENT"] = 6;
                values[valuesById[7] = "HOLIDAY"] = 7;
                values[valuesById[8] = "WEATHER"] = 8;
                values[valuesById[9] = "MAINTENANCE"] = 9;
                values[valuesById[10] = "CONSTRUCTION"] = 10;
                values[valuesById[11] = "POLICE_ACTIVITY"] = 11;
                values[valuesById[12] = "MEDICAL_EMERGENCY"] = 12;
                return values;
            })();
    
            /**
             * Effect enum.
             * @name transit_realtime.Alert.Effect
             * @enum {number}
             * @property {number} NO_SERVICE=1 NO_SERVICE value
             * @property {number} REDUCED_SERVICE=2 REDUCED_SERVICE value
             * @property {number} SIGNIFICANT_DELAYS=3 SIGNIFICANT_DELAYS value
             * @property {number} DETOUR=4 DETOUR value
             * @property {number} ADDITIONAL_SERVICE=5 ADDITIONAL_SERVICE value
             * @property {number} MODIFIED_SERVICE=6 MODIFIED_SERVICE value
             * @property {number} OTHER_EFFECT=7 OTHER_EFFECT value
             * @property {number} UNKNOWN_EFFECT=8 UNKNOWN_EFFECT value
             * @property {number} STOP_MOVED=9 STOP_MOVED value
             * @property {number} NO_EFFECT=10 NO_EFFECT value
             * @property {number} ACCESSIBILITY_ISSUE=11 ACCESSIBILITY_ISSUE value
             */
            Alert.Effect = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "NO_SERVICE"] = 1;
                values[valuesById[2] = "REDUCED_SERVICE"] = 2;
                values[valuesById[3] = "SIGNIFICANT_DELAYS"] = 3;
                values[valuesById[4] = "DETOUR"] = 4;
                values[valuesById[5] = "ADDITIONAL_SERVICE"] = 5;
                values[valuesById[6] = "MODIFIED_SERVICE"] = 6;
                values[valuesById[7] = "OTHER_EFFECT"] = 7;
                values[valuesById[8] = "UNKNOWN_EFFECT"] = 8;
                values[valuesById[9] = "STOP_MOVED"] = 9;
                values[valuesById[10] = "NO_EFFECT"] = 10;
                values[valuesById[11] = "ACCESSIBILITY_ISSUE"] = 11;
                return values;
            })();
    
            /**
             * SeverityLevel enum.
             * @name transit_realtime.Alert.SeverityLevel
             * @enum {number}
             * @property {number} UNKNOWN_SEVERITY=1 UNKNOWN_SEVERITY value
             * @property {number} INFO=2 INFO value
             * @property {number} WARNING=3 WARNING value
             * @property {number} SEVERE=4 SEVERE value
             */
            Alert.SeverityLevel = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "UNKNOWN_SEVERITY"] = 1;
                values[valuesById[2] = "INFO"] = 2;
                values[valuesById[3] = "WARNING"] = 3;
                values[valuesById[4] = "SEVERE"] = 4;
                return values;
            })();
    
            return Alert;
        })();
    
        transit_realtime.TimeRange = (function() {
    
            /**
             * Properties of a TimeRange.
             * @memberof transit_realtime
             * @interface ITimeRange
             * @property {number|Long|null} [start] TimeRange start
             * @property {number|Long|null} [end] TimeRange end
             */
    
            /**
             * Constructs a new TimeRange.
             * @memberof transit_realtime
             * @classdesc Represents a TimeRange.
             * @implements ITimeRange
             * @constructor
             * @param {transit_realtime.ITimeRange=} [properties] Properties to set
             */
            function TimeRange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TimeRange start.
             * @member {number|Long} start
             * @memberof transit_realtime.TimeRange
             * @instance
             */
            TimeRange.prototype.start = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TimeRange end.
             * @member {number|Long} end
             * @memberof transit_realtime.TimeRange
             * @instance
             */
            TimeRange.prototype.end = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new TimeRange instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TimeRange
             * @static
             * @param {transit_realtime.ITimeRange=} [properties] Properties to set
             * @returns {transit_realtime.TimeRange} TimeRange instance
             */
            TimeRange.create = function create(properties) {
                return new TimeRange(properties);
            };
    
            /**
             * Decodes a TimeRange message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TimeRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TimeRange} TimeRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TimeRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.start = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.end = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TimeRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TimeRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TimeRange} TimeRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TimeRange message.
             * @function verify
             * @memberof transit_realtime.TimeRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TimeRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.start != null && message.hasOwnProperty("start"))
                    if (!$util.isInteger(message.start) && !(message.start && $util.isInteger(message.start.low) && $util.isInteger(message.start.high)))
                        return "start: integer|Long expected";
                if (message.end != null && message.hasOwnProperty("end"))
                    if (!$util.isInteger(message.end) && !(message.end && $util.isInteger(message.end.low) && $util.isInteger(message.end.high)))
                        return "end: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TimeRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TimeRange} TimeRange
             */
            TimeRange.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TimeRange)
                    return object;
                var message = new $root.transit_realtime.TimeRange();
                if (object.start != null)
                    if ($util.Long)
                        (message.start = $util.Long.fromValue(object.start)).unsigned = true;
                    else if (typeof object.start === "string")
                        message.start = parseInt(object.start, 10);
                    else if (typeof object.start === "number")
                        message.start = object.start;
                    else if (typeof object.start === "object")
                        message.start = new $util.LongBits(object.start.low >>> 0, object.start.high >>> 0).toNumber(true);
                if (object.end != null)
                    if ($util.Long)
                        (message.end = $util.Long.fromValue(object.end)).unsigned = true;
                    else if (typeof object.end === "string")
                        message.end = parseInt(object.end, 10);
                    else if (typeof object.end === "number")
                        message.end = object.end;
                    else if (typeof object.end === "object")
                        message.end = new $util.LongBits(object.end.low >>> 0, object.end.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a TimeRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TimeRange
             * @static
             * @param {transit_realtime.TimeRange} message TimeRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TimeRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.start = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.start = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.end = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.end = options.longs === String ? "0" : 0;
                }
                if (message.start != null && message.hasOwnProperty("start"))
                    if (typeof message.start === "number")
                        object.start = options.longs === String ? String(message.start) : message.start;
                    else
                        object.start = options.longs === String ? $util.Long.prototype.toString.call(message.start) : options.longs === Number ? new $util.LongBits(message.start.low >>> 0, message.start.high >>> 0).toNumber(true) : message.start;
                if (message.end != null && message.hasOwnProperty("end"))
                    if (typeof message.end === "number")
                        object.end = options.longs === String ? String(message.end) : message.end;
                    else
                        object.end = options.longs === String ? $util.Long.prototype.toString.call(message.end) : options.longs === Number ? new $util.LongBits(message.end.low >>> 0, message.end.high >>> 0).toNumber(true) : message.end;
                return object;
            };
    
            /**
             * Converts this TimeRange to JSON.
             * @function toJSON
             * @memberof transit_realtime.TimeRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TimeRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for TimeRange
             * @function getTypeUrl
             * @memberof transit_realtime.TimeRange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TimeRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.TimeRange";
            };
    
            return TimeRange;
        })();
    
        transit_realtime.Position = (function() {
    
            /**
             * Properties of a Position.
             * @memberof transit_realtime
             * @interface IPosition
             * @property {number} latitude Position latitude
             * @property {number} longitude Position longitude
             * @property {number|null} [bearing] Position bearing
             * @property {number|null} [odometer] Position odometer
             * @property {number|null} [speed] Position speed
             */
    
            /**
             * Constructs a new Position.
             * @memberof transit_realtime
             * @classdesc Represents a Position.
             * @implements IPosition
             * @constructor
             * @param {transit_realtime.IPosition=} [properties] Properties to set
             */
            function Position(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Position latitude.
             * @member {number} latitude
             * @memberof transit_realtime.Position
             * @instance
             */
            Position.prototype.latitude = 0;
    
            /**
             * Position longitude.
             * @member {number} longitude
             * @memberof transit_realtime.Position
             * @instance
             */
            Position.prototype.longitude = 0;
    
            /**
             * Position bearing.
             * @member {number} bearing
             * @memberof transit_realtime.Position
             * @instance
             */
            Position.prototype.bearing = 0;
    
            /**
             * Position odometer.
             * @member {number} odometer
             * @memberof transit_realtime.Position
             * @instance
             */
            Position.prototype.odometer = 0;
    
            /**
             * Position speed.
             * @member {number} speed
             * @memberof transit_realtime.Position
             * @instance
             */
            Position.prototype.speed = 0;
    
            /**
             * Creates a new Position instance using the specified properties.
             * @function create
             * @memberof transit_realtime.Position
             * @static
             * @param {transit_realtime.IPosition=} [properties] Properties to set
             * @returns {transit_realtime.Position} Position instance
             */
            Position.create = function create(properties) {
                return new Position(properties);
            };
    
            /**
             * Decodes a Position message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.Position
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.Position} Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Position.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.Position();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.latitude = reader.float();
                            break;
                        }
                    case 2: {
                            message.longitude = reader.float();
                            break;
                        }
                    case 3: {
                            message.bearing = reader.float();
                            break;
                        }
                    case 4: {
                            message.odometer = reader.double();
                            break;
                        }
                    case 5: {
                            message.speed = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("latitude"))
                    throw $util.ProtocolError("missing required 'latitude'", { instance: message });
                if (!message.hasOwnProperty("longitude"))
                    throw $util.ProtocolError("missing required 'longitude'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a Position message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.Position
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.Position} Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Position.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Position message.
             * @function verify
             * @memberof transit_realtime.Position
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Position.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
                if (message.bearing != null && message.hasOwnProperty("bearing"))
                    if (typeof message.bearing !== "number")
                        return "bearing: number expected";
                if (message.odometer != null && message.hasOwnProperty("odometer"))
                    if (typeof message.odometer !== "number")
                        return "odometer: number expected";
                if (message.speed != null && message.hasOwnProperty("speed"))
                    if (typeof message.speed !== "number")
                        return "speed: number expected";
                return null;
            };
    
            /**
             * Creates a Position message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.Position
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.Position} Position
             */
            Position.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.Position)
                    return object;
                var message = new $root.transit_realtime.Position();
                if (object.latitude != null)
                    message.latitude = Number(object.latitude);
                if (object.longitude != null)
                    message.longitude = Number(object.longitude);
                if (object.bearing != null)
                    message.bearing = Number(object.bearing);
                if (object.odometer != null)
                    message.odometer = Number(object.odometer);
                if (object.speed != null)
                    message.speed = Number(object.speed);
                return message;
            };
    
            /**
             * Creates a plain object from a Position message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.Position
             * @static
             * @param {transit_realtime.Position} message Position
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Position.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.latitude = 0;
                    object.longitude = 0;
                    object.bearing = 0;
                    object.odometer = 0;
                    object.speed = 0;
                }
                if (message.latitude != null && message.hasOwnProperty("latitude"))
                    object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                if (message.longitude != null && message.hasOwnProperty("longitude"))
                    object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                if (message.bearing != null && message.hasOwnProperty("bearing"))
                    object.bearing = options.json && !isFinite(message.bearing) ? String(message.bearing) : message.bearing;
                if (message.odometer != null && message.hasOwnProperty("odometer"))
                    object.odometer = options.json && !isFinite(message.odometer) ? String(message.odometer) : message.odometer;
                if (message.speed != null && message.hasOwnProperty("speed"))
                    object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
                return object;
            };
    
            /**
             * Converts this Position to JSON.
             * @function toJSON
             * @memberof transit_realtime.Position
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Position.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Position
             * @function getTypeUrl
             * @memberof transit_realtime.Position
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.Position";
            };
    
            return Position;
        })();
    
        transit_realtime.TripDescriptor = (function() {
    
            /**
             * Properties of a TripDescriptor.
             * @memberof transit_realtime
             * @interface ITripDescriptor
             * @property {string|null} [tripId] TripDescriptor tripId
             * @property {string|null} [routeId] TripDescriptor routeId
             * @property {number|null} [directionId] TripDescriptor directionId
             * @property {string|null} [startTime] TripDescriptor startTime
             * @property {string|null} [startDate] TripDescriptor startDate
             * @property {transit_realtime.TripDescriptor.ScheduleRelationship|null} [scheduleRelationship] TripDescriptor scheduleRelationship
             * @property {transit_realtime.TripDescriptor.IModifiedTripSelector|null} [modifiedTrip] TripDescriptor modifiedTrip
             */
    
            /**
             * Constructs a new TripDescriptor.
             * @memberof transit_realtime
             * @classdesc Represents a TripDescriptor.
             * @implements ITripDescriptor
             * @constructor
             * @param {transit_realtime.ITripDescriptor=} [properties] Properties to set
             */
            function TripDescriptor(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TripDescriptor tripId.
             * @member {string} tripId
             * @memberof transit_realtime.TripDescriptor
             * @instance
             */
            TripDescriptor.prototype.tripId = "";
    
            /**
             * TripDescriptor routeId.
             * @member {string} routeId
             * @memberof transit_realtime.TripDescriptor
             * @instance
             */
            TripDescriptor.prototype.routeId = "";
    
            /**
             * TripDescriptor directionId.
             * @member {number} directionId
             * @memberof transit_realtime.TripDescriptor
             * @instance
             */
            TripDescriptor.prototype.directionId = 0;
    
            /**
             * TripDescriptor startTime.
             * @member {string} startTime
             * @memberof transit_realtime.TripDescriptor
             * @instance
             */
            TripDescriptor.prototype.startTime = "";
    
            /**
             * TripDescriptor startDate.
             * @member {string} startDate
             * @memberof transit_realtime.TripDescriptor
             * @instance
             */
            TripDescriptor.prototype.startDate = "";
    
            /**
             * TripDescriptor scheduleRelationship.
             * @member {transit_realtime.TripDescriptor.ScheduleRelationship} scheduleRelationship
             * @memberof transit_realtime.TripDescriptor
             * @instance
             */
            TripDescriptor.prototype.scheduleRelationship = 0;
    
            /**
             * TripDescriptor modifiedTrip.
             * @member {transit_realtime.TripDescriptor.IModifiedTripSelector|null|undefined} modifiedTrip
             * @memberof transit_realtime.TripDescriptor
             * @instance
             */
            TripDescriptor.prototype.modifiedTrip = null;
    
            /**
             * Creates a new TripDescriptor instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TripDescriptor
             * @static
             * @param {transit_realtime.ITripDescriptor=} [properties] Properties to set
             * @returns {transit_realtime.TripDescriptor} TripDescriptor instance
             */
            TripDescriptor.create = function create(properties) {
                return new TripDescriptor(properties);
            };
    
            /**
             * Decodes a TripDescriptor message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TripDescriptor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TripDescriptor} TripDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripDescriptor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripDescriptor();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.tripId = reader.string();
                            break;
                        }
                    case 5: {
                            message.routeId = reader.string();
                            break;
                        }
                    case 6: {
                            message.directionId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.startTime = reader.string();
                            break;
                        }
                    case 3: {
                            message.startDate = reader.string();
                            break;
                        }
                    case 4: {
                            message.scheduleRelationship = reader.int32();
                            break;
                        }
                    case 7: {
                            message.modifiedTrip = $root.transit_realtime.TripDescriptor.ModifiedTripSelector.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TripDescriptor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TripDescriptor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TripDescriptor} TripDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripDescriptor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TripDescriptor message.
             * @function verify
             * @memberof transit_realtime.TripDescriptor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TripDescriptor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tripId != null && message.hasOwnProperty("tripId"))
                    if (!$util.isString(message.tripId))
                        return "tripId: string expected";
                if (message.routeId != null && message.hasOwnProperty("routeId"))
                    if (!$util.isString(message.routeId))
                        return "routeId: string expected";
                if (message.directionId != null && message.hasOwnProperty("directionId"))
                    if (!$util.isInteger(message.directionId))
                        return "directionId: integer expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isString(message.startTime))
                        return "startTime: string expected";
                if (message.startDate != null && message.hasOwnProperty("startDate"))
                    if (!$util.isString(message.startDate))
                        return "startDate: string expected";
                if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                    switch (message.scheduleRelationship) {
                    default:
                        return "scheduleRelationship: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
                if (message.modifiedTrip != null && message.hasOwnProperty("modifiedTrip")) {
                    var error = $root.transit_realtime.TripDescriptor.ModifiedTripSelector.verify(message.modifiedTrip);
                    if (error)
                        return "modifiedTrip." + error;
                }
                return null;
            };
    
            /**
             * Creates a TripDescriptor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TripDescriptor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TripDescriptor} TripDescriptor
             */
            TripDescriptor.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TripDescriptor)
                    return object;
                var message = new $root.transit_realtime.TripDescriptor();
                if (object.tripId != null)
                    message.tripId = String(object.tripId);
                if (object.routeId != null)
                    message.routeId = String(object.routeId);
                if (object.directionId != null)
                    message.directionId = object.directionId >>> 0;
                if (object.startTime != null)
                    message.startTime = String(object.startTime);
                if (object.startDate != null)
                    message.startDate = String(object.startDate);
                switch (object.scheduleRelationship) {
                default:
                    if (typeof object.scheduleRelationship === "number") {
                        message.scheduleRelationship = object.scheduleRelationship;
                        break;
                    }
                    break;
                case "SCHEDULED":
                case 0:
                    message.scheduleRelationship = 0;
                    break;
                case "ADDED":
                case 1:
                    message.scheduleRelationship = 1;
                    break;
                case "UNSCHEDULED":
                case 2:
                    message.scheduleRelationship = 2;
                    break;
                case "CANCELED":
                case 3:
                    message.scheduleRelationship = 3;
                    break;
                case "REPLACEMENT":
                case 5:
                    message.scheduleRelationship = 5;
                    break;
                case "DUPLICATED":
                case 6:
                    message.scheduleRelationship = 6;
                    break;
                case "DELETED":
                case 7:
                    message.scheduleRelationship = 7;
                    break;
                }
                if (object.modifiedTrip != null) {
                    if (typeof object.modifiedTrip !== "object")
                        throw TypeError(".transit_realtime.TripDescriptor.modifiedTrip: object expected");
                    message.modifiedTrip = $root.transit_realtime.TripDescriptor.ModifiedTripSelector.fromObject(object.modifiedTrip);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TripDescriptor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TripDescriptor
             * @static
             * @param {transit_realtime.TripDescriptor} message TripDescriptor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TripDescriptor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tripId = "";
                    object.startTime = "";
                    object.startDate = "";
                    object.scheduleRelationship = options.enums === String ? "SCHEDULED" : 0;
                    object.routeId = "";
                    object.directionId = 0;
                    object.modifiedTrip = null;
                }
                if (message.tripId != null && message.hasOwnProperty("tripId"))
                    object.tripId = message.tripId;
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    object.startTime = message.startTime;
                if (message.startDate != null && message.hasOwnProperty("startDate"))
                    object.startDate = message.startDate;
                if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                    object.scheduleRelationship = options.enums === String ? $root.transit_realtime.TripDescriptor.ScheduleRelationship[message.scheduleRelationship] === undefined ? message.scheduleRelationship : $root.transit_realtime.TripDescriptor.ScheduleRelationship[message.scheduleRelationship] : message.scheduleRelationship;
                if (message.routeId != null && message.hasOwnProperty("routeId"))
                    object.routeId = message.routeId;
                if (message.directionId != null && message.hasOwnProperty("directionId"))
                    object.directionId = message.directionId;
                if (message.modifiedTrip != null && message.hasOwnProperty("modifiedTrip"))
                    object.modifiedTrip = $root.transit_realtime.TripDescriptor.ModifiedTripSelector.toObject(message.modifiedTrip, options);
                return object;
            };
    
            /**
             * Converts this TripDescriptor to JSON.
             * @function toJSON
             * @memberof transit_realtime.TripDescriptor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TripDescriptor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for TripDescriptor
             * @function getTypeUrl
             * @memberof transit_realtime.TripDescriptor
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TripDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.TripDescriptor";
            };
    
            /**
             * ScheduleRelationship enum.
             * @name transit_realtime.TripDescriptor.ScheduleRelationship
             * @enum {number}
             * @property {number} SCHEDULED=0 SCHEDULED value
             * @property {number} ADDED=1 ADDED value
             * @property {number} UNSCHEDULED=2 UNSCHEDULED value
             * @property {number} CANCELED=3 CANCELED value
             * @property {number} REPLACEMENT=5 REPLACEMENT value
             * @property {number} DUPLICATED=6 DUPLICATED value
             * @property {number} DELETED=7 DELETED value
             */
            TripDescriptor.ScheduleRelationship = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SCHEDULED"] = 0;
                values[valuesById[1] = "ADDED"] = 1;
                values[valuesById[2] = "UNSCHEDULED"] = 2;
                values[valuesById[3] = "CANCELED"] = 3;
                values[valuesById[5] = "REPLACEMENT"] = 5;
                values[valuesById[6] = "DUPLICATED"] = 6;
                values[valuesById[7] = "DELETED"] = 7;
                return values;
            })();
    
            TripDescriptor.ModifiedTripSelector = (function() {
    
                /**
                 * Properties of a ModifiedTripSelector.
                 * @memberof transit_realtime.TripDescriptor
                 * @interface IModifiedTripSelector
                 * @property {string|null} [modificationsId] ModifiedTripSelector modificationsId
                 * @property {string|null} [affectedTripId] ModifiedTripSelector affectedTripId
                 * @property {string|null} [startTime] ModifiedTripSelector startTime
                 * @property {string|null} [startDate] ModifiedTripSelector startDate
                 */
    
                /**
                 * Constructs a new ModifiedTripSelector.
                 * @memberof transit_realtime.TripDescriptor
                 * @classdesc Represents a ModifiedTripSelector.
                 * @implements IModifiedTripSelector
                 * @constructor
                 * @param {transit_realtime.TripDescriptor.IModifiedTripSelector=} [properties] Properties to set
                 */
                function ModifiedTripSelector(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ModifiedTripSelector modificationsId.
                 * @member {string} modificationsId
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @instance
                 */
                ModifiedTripSelector.prototype.modificationsId = "";
    
                /**
                 * ModifiedTripSelector affectedTripId.
                 * @member {string} affectedTripId
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @instance
                 */
                ModifiedTripSelector.prototype.affectedTripId = "";
    
                /**
                 * ModifiedTripSelector startTime.
                 * @member {string} startTime
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @instance
                 */
                ModifiedTripSelector.prototype.startTime = "";
    
                /**
                 * ModifiedTripSelector startDate.
                 * @member {string} startDate
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @instance
                 */
                ModifiedTripSelector.prototype.startDate = "";
    
                /**
                 * Creates a new ModifiedTripSelector instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @static
                 * @param {transit_realtime.TripDescriptor.IModifiedTripSelector=} [properties] Properties to set
                 * @returns {transit_realtime.TripDescriptor.ModifiedTripSelector} ModifiedTripSelector instance
                 */
                ModifiedTripSelector.create = function create(properties) {
                    return new ModifiedTripSelector(properties);
                };
    
                /**
                 * Decodes a ModifiedTripSelector message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TripDescriptor.ModifiedTripSelector} ModifiedTripSelector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ModifiedTripSelector.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripDescriptor.ModifiedTripSelector();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.modificationsId = reader.string();
                                break;
                            }
                        case 2: {
                                message.affectedTripId = reader.string();
                                break;
                            }
                        case 3: {
                                message.startTime = reader.string();
                                break;
                            }
                        case 4: {
                                message.startDate = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ModifiedTripSelector message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TripDescriptor.ModifiedTripSelector} ModifiedTripSelector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ModifiedTripSelector.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ModifiedTripSelector message.
                 * @function verify
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ModifiedTripSelector.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.modificationsId != null && message.hasOwnProperty("modificationsId"))
                        if (!$util.isString(message.modificationsId))
                            return "modificationsId: string expected";
                    if (message.affectedTripId != null && message.hasOwnProperty("affectedTripId"))
                        if (!$util.isString(message.affectedTripId))
                            return "affectedTripId: string expected";
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        if (!$util.isString(message.startTime))
                            return "startTime: string expected";
                    if (message.startDate != null && message.hasOwnProperty("startDate"))
                        if (!$util.isString(message.startDate))
                            return "startDate: string expected";
                    return null;
                };
    
                /**
                 * Creates a ModifiedTripSelector message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TripDescriptor.ModifiedTripSelector} ModifiedTripSelector
                 */
                ModifiedTripSelector.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TripDescriptor.ModifiedTripSelector)
                        return object;
                    var message = new $root.transit_realtime.TripDescriptor.ModifiedTripSelector();
                    if (object.modificationsId != null)
                        message.modificationsId = String(object.modificationsId);
                    if (object.affectedTripId != null)
                        message.affectedTripId = String(object.affectedTripId);
                    if (object.startTime != null)
                        message.startTime = String(object.startTime);
                    if (object.startDate != null)
                        message.startDate = String(object.startDate);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ModifiedTripSelector message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @static
                 * @param {transit_realtime.TripDescriptor.ModifiedTripSelector} message ModifiedTripSelector
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ModifiedTripSelector.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.modificationsId = "";
                        object.affectedTripId = "";
                        object.startTime = "";
                        object.startDate = "";
                    }
                    if (message.modificationsId != null && message.hasOwnProperty("modificationsId"))
                        object.modificationsId = message.modificationsId;
                    if (message.affectedTripId != null && message.hasOwnProperty("affectedTripId"))
                        object.affectedTripId = message.affectedTripId;
                    if (message.startTime != null && message.hasOwnProperty("startTime"))
                        object.startTime = message.startTime;
                    if (message.startDate != null && message.hasOwnProperty("startDate"))
                        object.startDate = message.startDate;
                    return object;
                };
    
                /**
                 * Converts this ModifiedTripSelector to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ModifiedTripSelector.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ModifiedTripSelector
                 * @function getTypeUrl
                 * @memberof transit_realtime.TripDescriptor.ModifiedTripSelector
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ModifiedTripSelector.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TripDescriptor.ModifiedTripSelector";
                };
    
                return ModifiedTripSelector;
            })();
    
            return TripDescriptor;
        })();
    
        transit_realtime.VehicleDescriptor = (function() {
    
            /**
             * Properties of a VehicleDescriptor.
             * @memberof transit_realtime
             * @interface IVehicleDescriptor
             * @property {string|null} [id] VehicleDescriptor id
             * @property {string|null} [label] VehicleDescriptor label
             * @property {string|null} [licensePlate] VehicleDescriptor licensePlate
             * @property {transit_realtime.VehicleDescriptor.WheelchairAccessible|null} [wheelchairAccessible] VehicleDescriptor wheelchairAccessible
             */
    
            /**
             * Constructs a new VehicleDescriptor.
             * @memberof transit_realtime
             * @classdesc Represents a VehicleDescriptor.
             * @implements IVehicleDescriptor
             * @constructor
             * @param {transit_realtime.IVehicleDescriptor=} [properties] Properties to set
             */
            function VehicleDescriptor(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * VehicleDescriptor id.
             * @member {string} id
             * @memberof transit_realtime.VehicleDescriptor
             * @instance
             */
            VehicleDescriptor.prototype.id = "";
    
            /**
             * VehicleDescriptor label.
             * @member {string} label
             * @memberof transit_realtime.VehicleDescriptor
             * @instance
             */
            VehicleDescriptor.prototype.label = "";
    
            /**
             * VehicleDescriptor licensePlate.
             * @member {string} licensePlate
             * @memberof transit_realtime.VehicleDescriptor
             * @instance
             */
            VehicleDescriptor.prototype.licensePlate = "";
    
            /**
             * VehicleDescriptor wheelchairAccessible.
             * @member {transit_realtime.VehicleDescriptor.WheelchairAccessible} wheelchairAccessible
             * @memberof transit_realtime.VehicleDescriptor
             * @instance
             */
            VehicleDescriptor.prototype.wheelchairAccessible = 0;
    
            /**
             * Creates a new VehicleDescriptor instance using the specified properties.
             * @function create
             * @memberof transit_realtime.VehicleDescriptor
             * @static
             * @param {transit_realtime.IVehicleDescriptor=} [properties] Properties to set
             * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor instance
             */
            VehicleDescriptor.create = function create(properties) {
                return new VehicleDescriptor(properties);
            };
    
            /**
             * Decodes a VehicleDescriptor message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.VehicleDescriptor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VehicleDescriptor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.VehicleDescriptor();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.label = reader.string();
                            break;
                        }
                    case 3: {
                            message.licensePlate = reader.string();
                            break;
                        }
                    case 4: {
                            message.wheelchairAccessible = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a VehicleDescriptor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.VehicleDescriptor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VehicleDescriptor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a VehicleDescriptor message.
             * @function verify
             * @memberof transit_realtime.VehicleDescriptor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VehicleDescriptor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
                if (message.licensePlate != null && message.hasOwnProperty("licensePlate"))
                    if (!$util.isString(message.licensePlate))
                        return "licensePlate: string expected";
                if (message.wheelchairAccessible != null && message.hasOwnProperty("wheelchairAccessible"))
                    switch (message.wheelchairAccessible) {
                    default:
                        return "wheelchairAccessible: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a VehicleDescriptor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.VehicleDescriptor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
             */
            VehicleDescriptor.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.VehicleDescriptor)
                    return object;
                var message = new $root.transit_realtime.VehicleDescriptor();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.label != null)
                    message.label = String(object.label);
                if (object.licensePlate != null)
                    message.licensePlate = String(object.licensePlate);
                switch (object.wheelchairAccessible) {
                default:
                    if (typeof object.wheelchairAccessible === "number") {
                        message.wheelchairAccessible = object.wheelchairAccessible;
                        break;
                    }
                    break;
                case "NO_VALUE":
                case 0:
                    message.wheelchairAccessible = 0;
                    break;
                case "UNKNOWN":
                case 1:
                    message.wheelchairAccessible = 1;
                    break;
                case "WHEELCHAIR_ACCESSIBLE":
                case 2:
                    message.wheelchairAccessible = 2;
                    break;
                case "WHEELCHAIR_INACCESSIBLE":
                case 3:
                    message.wheelchairAccessible = 3;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a VehicleDescriptor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.VehicleDescriptor
             * @static
             * @param {transit_realtime.VehicleDescriptor} message VehicleDescriptor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VehicleDescriptor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.label = "";
                    object.licensePlate = "";
                    object.wheelchairAccessible = options.enums === String ? "NO_VALUE" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.licensePlate != null && message.hasOwnProperty("licensePlate"))
                    object.licensePlate = message.licensePlate;
                if (message.wheelchairAccessible != null && message.hasOwnProperty("wheelchairAccessible"))
                    object.wheelchairAccessible = options.enums === String ? $root.transit_realtime.VehicleDescriptor.WheelchairAccessible[message.wheelchairAccessible] === undefined ? message.wheelchairAccessible : $root.transit_realtime.VehicleDescriptor.WheelchairAccessible[message.wheelchairAccessible] : message.wheelchairAccessible;
                return object;
            };
    
            /**
             * Converts this VehicleDescriptor to JSON.
             * @function toJSON
             * @memberof transit_realtime.VehicleDescriptor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VehicleDescriptor.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for VehicleDescriptor
             * @function getTypeUrl
             * @memberof transit_realtime.VehicleDescriptor
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VehicleDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.VehicleDescriptor";
            };
    
            /**
             * WheelchairAccessible enum.
             * @name transit_realtime.VehicleDescriptor.WheelchairAccessible
             * @enum {number}
             * @property {number} NO_VALUE=0 NO_VALUE value
             * @property {number} UNKNOWN=1 UNKNOWN value
             * @property {number} WHEELCHAIR_ACCESSIBLE=2 WHEELCHAIR_ACCESSIBLE value
             * @property {number} WHEELCHAIR_INACCESSIBLE=3 WHEELCHAIR_INACCESSIBLE value
             */
            VehicleDescriptor.WheelchairAccessible = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NO_VALUE"] = 0;
                values[valuesById[1] = "UNKNOWN"] = 1;
                values[valuesById[2] = "WHEELCHAIR_ACCESSIBLE"] = 2;
                values[valuesById[3] = "WHEELCHAIR_INACCESSIBLE"] = 3;
                return values;
            })();
    
            return VehicleDescriptor;
        })();
    
        transit_realtime.EntitySelector = (function() {
    
            /**
             * Properties of an EntitySelector.
             * @memberof transit_realtime
             * @interface IEntitySelector
             * @property {string|null} [agencyId] EntitySelector agencyId
             * @property {string|null} [routeId] EntitySelector routeId
             * @property {number|null} [routeType] EntitySelector routeType
             * @property {transit_realtime.ITripDescriptor|null} [trip] EntitySelector trip
             * @property {string|null} [stopId] EntitySelector stopId
             * @property {number|null} [directionId] EntitySelector directionId
             */
    
            /**
             * Constructs a new EntitySelector.
             * @memberof transit_realtime
             * @classdesc Represents an EntitySelector.
             * @implements IEntitySelector
             * @constructor
             * @param {transit_realtime.IEntitySelector=} [properties] Properties to set
             */
            function EntitySelector(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EntitySelector agencyId.
             * @member {string} agencyId
             * @memberof transit_realtime.EntitySelector
             * @instance
             */
            EntitySelector.prototype.agencyId = "";
    
            /**
             * EntitySelector routeId.
             * @member {string} routeId
             * @memberof transit_realtime.EntitySelector
             * @instance
             */
            EntitySelector.prototype.routeId = "";
    
            /**
             * EntitySelector routeType.
             * @member {number} routeType
             * @memberof transit_realtime.EntitySelector
             * @instance
             */
            EntitySelector.prototype.routeType = 0;
    
            /**
             * EntitySelector trip.
             * @member {transit_realtime.ITripDescriptor|null|undefined} trip
             * @memberof transit_realtime.EntitySelector
             * @instance
             */
            EntitySelector.prototype.trip = null;
    
            /**
             * EntitySelector stopId.
             * @member {string} stopId
             * @memberof transit_realtime.EntitySelector
             * @instance
             */
            EntitySelector.prototype.stopId = "";
    
            /**
             * EntitySelector directionId.
             * @member {number} directionId
             * @memberof transit_realtime.EntitySelector
             * @instance
             */
            EntitySelector.prototype.directionId = 0;
    
            /**
             * Creates a new EntitySelector instance using the specified properties.
             * @function create
             * @memberof transit_realtime.EntitySelector
             * @static
             * @param {transit_realtime.IEntitySelector=} [properties] Properties to set
             * @returns {transit_realtime.EntitySelector} EntitySelector instance
             */
            EntitySelector.create = function create(properties) {
                return new EntitySelector(properties);
            };
    
            /**
             * Decodes an EntitySelector message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.EntitySelector
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.EntitySelector} EntitySelector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntitySelector.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.EntitySelector();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.agencyId = reader.string();
                            break;
                        }
                    case 2: {
                            message.routeId = reader.string();
                            break;
                        }
                    case 3: {
                            message.routeType = reader.int32();
                            break;
                        }
                    case 4: {
                            message.trip = $root.transit_realtime.TripDescriptor.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.stopId = reader.string();
                            break;
                        }
                    case 6: {
                            message.directionId = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an EntitySelector message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.EntitySelector
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.EntitySelector} EntitySelector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EntitySelector.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an EntitySelector message.
             * @function verify
             * @memberof transit_realtime.EntitySelector
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EntitySelector.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.agencyId != null && message.hasOwnProperty("agencyId"))
                    if (!$util.isString(message.agencyId))
                        return "agencyId: string expected";
                if (message.routeId != null && message.hasOwnProperty("routeId"))
                    if (!$util.isString(message.routeId))
                        return "routeId: string expected";
                if (message.routeType != null && message.hasOwnProperty("routeType"))
                    if (!$util.isInteger(message.routeType))
                        return "routeType: integer expected";
                if (message.trip != null && message.hasOwnProperty("trip")) {
                    var error = $root.transit_realtime.TripDescriptor.verify(message.trip);
                    if (error)
                        return "trip." + error;
                }
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    if (!$util.isString(message.stopId))
                        return "stopId: string expected";
                if (message.directionId != null && message.hasOwnProperty("directionId"))
                    if (!$util.isInteger(message.directionId))
                        return "directionId: integer expected";
                return null;
            };
    
            /**
             * Creates an EntitySelector message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.EntitySelector
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.EntitySelector} EntitySelector
             */
            EntitySelector.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.EntitySelector)
                    return object;
                var message = new $root.transit_realtime.EntitySelector();
                if (object.agencyId != null)
                    message.agencyId = String(object.agencyId);
                if (object.routeId != null)
                    message.routeId = String(object.routeId);
                if (object.routeType != null)
                    message.routeType = object.routeType | 0;
                if (object.trip != null) {
                    if (typeof object.trip !== "object")
                        throw TypeError(".transit_realtime.EntitySelector.trip: object expected");
                    message.trip = $root.transit_realtime.TripDescriptor.fromObject(object.trip);
                }
                if (object.stopId != null)
                    message.stopId = String(object.stopId);
                if (object.directionId != null)
                    message.directionId = object.directionId >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from an EntitySelector message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.EntitySelector
             * @static
             * @param {transit_realtime.EntitySelector} message EntitySelector
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EntitySelector.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.agencyId = "";
                    object.routeId = "";
                    object.routeType = 0;
                    object.trip = null;
                    object.stopId = "";
                    object.directionId = 0;
                }
                if (message.agencyId != null && message.hasOwnProperty("agencyId"))
                    object.agencyId = message.agencyId;
                if (message.routeId != null && message.hasOwnProperty("routeId"))
                    object.routeId = message.routeId;
                if (message.routeType != null && message.hasOwnProperty("routeType"))
                    object.routeType = message.routeType;
                if (message.trip != null && message.hasOwnProperty("trip"))
                    object.trip = $root.transit_realtime.TripDescriptor.toObject(message.trip, options);
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    object.stopId = message.stopId;
                if (message.directionId != null && message.hasOwnProperty("directionId"))
                    object.directionId = message.directionId;
                return object;
            };
    
            /**
             * Converts this EntitySelector to JSON.
             * @function toJSON
             * @memberof transit_realtime.EntitySelector
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EntitySelector.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for EntitySelector
             * @function getTypeUrl
             * @memberof transit_realtime.EntitySelector
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EntitySelector.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.EntitySelector";
            };
    
            return EntitySelector;
        })();
    
        transit_realtime.TranslatedString = (function() {
    
            /**
             * Properties of a TranslatedString.
             * @memberof transit_realtime
             * @interface ITranslatedString
             * @property {Array.<transit_realtime.TranslatedString.ITranslation>|null} [translation] TranslatedString translation
             */
    
            /**
             * Constructs a new TranslatedString.
             * @memberof transit_realtime
             * @classdesc Represents a TranslatedString.
             * @implements ITranslatedString
             * @constructor
             * @param {transit_realtime.ITranslatedString=} [properties] Properties to set
             */
            function TranslatedString(properties) {
                this.translation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TranslatedString translation.
             * @member {Array.<transit_realtime.TranslatedString.ITranslation>} translation
             * @memberof transit_realtime.TranslatedString
             * @instance
             */
            TranslatedString.prototype.translation = $util.emptyArray;
    
            /**
             * Creates a new TranslatedString instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TranslatedString
             * @static
             * @param {transit_realtime.ITranslatedString=} [properties] Properties to set
             * @returns {transit_realtime.TranslatedString} TranslatedString instance
             */
            TranslatedString.create = function create(properties) {
                return new TranslatedString(properties);
            };
    
            /**
             * Decodes a TranslatedString message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TranslatedString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TranslatedString} TranslatedString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TranslatedString.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TranslatedString();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.translation && message.translation.length))
                                message.translation = [];
                            message.translation.push($root.transit_realtime.TranslatedString.Translation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TranslatedString message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TranslatedString
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TranslatedString} TranslatedString
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TranslatedString.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TranslatedString message.
             * @function verify
             * @memberof transit_realtime.TranslatedString
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TranslatedString.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.translation != null && message.hasOwnProperty("translation")) {
                    if (!Array.isArray(message.translation))
                        return "translation: array expected";
                    for (var i = 0; i < message.translation.length; ++i) {
                        var error = $root.transit_realtime.TranslatedString.Translation.verify(message.translation[i]);
                        if (error)
                            return "translation." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TranslatedString message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TranslatedString
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TranslatedString} TranslatedString
             */
            TranslatedString.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TranslatedString)
                    return object;
                var message = new $root.transit_realtime.TranslatedString();
                if (object.translation) {
                    if (!Array.isArray(object.translation))
                        throw TypeError(".transit_realtime.TranslatedString.translation: array expected");
                    message.translation = [];
                    for (var i = 0; i < object.translation.length; ++i) {
                        if (typeof object.translation[i] !== "object")
                            throw TypeError(".transit_realtime.TranslatedString.translation: object expected");
                        message.translation[i] = $root.transit_realtime.TranslatedString.Translation.fromObject(object.translation[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TranslatedString message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TranslatedString
             * @static
             * @param {transit_realtime.TranslatedString} message TranslatedString
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TranslatedString.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.translation = [];
                if (message.translation && message.translation.length) {
                    object.translation = [];
                    for (var j = 0; j < message.translation.length; ++j)
                        object.translation[j] = $root.transit_realtime.TranslatedString.Translation.toObject(message.translation[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TranslatedString to JSON.
             * @function toJSON
             * @memberof transit_realtime.TranslatedString
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TranslatedString.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for TranslatedString
             * @function getTypeUrl
             * @memberof transit_realtime.TranslatedString
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TranslatedString.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.TranslatedString";
            };
    
            TranslatedString.Translation = (function() {
    
                /**
                 * Properties of a Translation.
                 * @memberof transit_realtime.TranslatedString
                 * @interface ITranslation
                 * @property {string} text Translation text
                 * @property {string|null} [language] Translation language
                 */
    
                /**
                 * Constructs a new Translation.
                 * @memberof transit_realtime.TranslatedString
                 * @classdesc Represents a Translation.
                 * @implements ITranslation
                 * @constructor
                 * @param {transit_realtime.TranslatedString.ITranslation=} [properties] Properties to set
                 */
                function Translation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Translation text.
                 * @member {string} text
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @instance
                 */
                Translation.prototype.text = "";
    
                /**
                 * Translation language.
                 * @member {string} language
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @instance
                 */
                Translation.prototype.language = "";
    
                /**
                 * Creates a new Translation instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @static
                 * @param {transit_realtime.TranslatedString.ITranslation=} [properties] Properties to set
                 * @returns {transit_realtime.TranslatedString.Translation} Translation instance
                 */
                Translation.create = function create(properties) {
                    return new Translation(properties);
                };
    
                /**
                 * Decodes a Translation message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TranslatedString.Translation} Translation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Translation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TranslatedString.Translation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.text = reader.string();
                                break;
                            }
                        case 2: {
                                message.language = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("text"))
                        throw $util.ProtocolError("missing required 'text'", { instance: message });
                    return message;
                };
    
                /**
                 * Decodes a Translation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TranslatedString.Translation} Translation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Translation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Translation message.
                 * @function verify
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Translation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.text))
                        return "text: string expected";
                    if (message.language != null && message.hasOwnProperty("language"))
                        if (!$util.isString(message.language))
                            return "language: string expected";
                    return null;
                };
    
                /**
                 * Creates a Translation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TranslatedString.Translation} Translation
                 */
                Translation.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TranslatedString.Translation)
                        return object;
                    var message = new $root.transit_realtime.TranslatedString.Translation();
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.language != null)
                        message.language = String(object.language);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Translation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @static
                 * @param {transit_realtime.TranslatedString.Translation} message Translation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Translation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.text = "";
                        object.language = "";
                    }
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.language != null && message.hasOwnProperty("language"))
                        object.language = message.language;
                    return object;
                };
    
                /**
                 * Converts this Translation to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Translation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Translation
                 * @function getTypeUrl
                 * @memberof transit_realtime.TranslatedString.Translation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Translation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TranslatedString.Translation";
                };
    
                return Translation;
            })();
    
            return TranslatedString;
        })();
    
        transit_realtime.TranslatedImage = (function() {
    
            /**
             * Properties of a TranslatedImage.
             * @memberof transit_realtime
             * @interface ITranslatedImage
             * @property {Array.<transit_realtime.TranslatedImage.ILocalizedImage>|null} [localizedImage] TranslatedImage localizedImage
             */
    
            /**
             * Constructs a new TranslatedImage.
             * @memberof transit_realtime
             * @classdesc Represents a TranslatedImage.
             * @implements ITranslatedImage
             * @constructor
             * @param {transit_realtime.ITranslatedImage=} [properties] Properties to set
             */
            function TranslatedImage(properties) {
                this.localizedImage = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TranslatedImage localizedImage.
             * @member {Array.<transit_realtime.TranslatedImage.ILocalizedImage>} localizedImage
             * @memberof transit_realtime.TranslatedImage
             * @instance
             */
            TranslatedImage.prototype.localizedImage = $util.emptyArray;
    
            /**
             * Creates a new TranslatedImage instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TranslatedImage
             * @static
             * @param {transit_realtime.ITranslatedImage=} [properties] Properties to set
             * @returns {transit_realtime.TranslatedImage} TranslatedImage instance
             */
            TranslatedImage.create = function create(properties) {
                return new TranslatedImage(properties);
            };
    
            /**
             * Decodes a TranslatedImage message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TranslatedImage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TranslatedImage} TranslatedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TranslatedImage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TranslatedImage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.localizedImage && message.localizedImage.length))
                                message.localizedImage = [];
                            message.localizedImage.push($root.transit_realtime.TranslatedImage.LocalizedImage.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TranslatedImage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TranslatedImage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TranslatedImage} TranslatedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TranslatedImage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TranslatedImage message.
             * @function verify
             * @memberof transit_realtime.TranslatedImage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TranslatedImage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.localizedImage != null && message.hasOwnProperty("localizedImage")) {
                    if (!Array.isArray(message.localizedImage))
                        return "localizedImage: array expected";
                    for (var i = 0; i < message.localizedImage.length; ++i) {
                        var error = $root.transit_realtime.TranslatedImage.LocalizedImage.verify(message.localizedImage[i]);
                        if (error)
                            return "localizedImage." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TranslatedImage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TranslatedImage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TranslatedImage} TranslatedImage
             */
            TranslatedImage.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TranslatedImage)
                    return object;
                var message = new $root.transit_realtime.TranslatedImage();
                if (object.localizedImage) {
                    if (!Array.isArray(object.localizedImage))
                        throw TypeError(".transit_realtime.TranslatedImage.localizedImage: array expected");
                    message.localizedImage = [];
                    for (var i = 0; i < object.localizedImage.length; ++i) {
                        if (typeof object.localizedImage[i] !== "object")
                            throw TypeError(".transit_realtime.TranslatedImage.localizedImage: object expected");
                        message.localizedImage[i] = $root.transit_realtime.TranslatedImage.LocalizedImage.fromObject(object.localizedImage[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TranslatedImage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TranslatedImage
             * @static
             * @param {transit_realtime.TranslatedImage} message TranslatedImage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TranslatedImage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.localizedImage = [];
                if (message.localizedImage && message.localizedImage.length) {
                    object.localizedImage = [];
                    for (var j = 0; j < message.localizedImage.length; ++j)
                        object.localizedImage[j] = $root.transit_realtime.TranslatedImage.LocalizedImage.toObject(message.localizedImage[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TranslatedImage to JSON.
             * @function toJSON
             * @memberof transit_realtime.TranslatedImage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TranslatedImage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for TranslatedImage
             * @function getTypeUrl
             * @memberof transit_realtime.TranslatedImage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TranslatedImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.TranslatedImage";
            };
    
            TranslatedImage.LocalizedImage = (function() {
    
                /**
                 * Properties of a LocalizedImage.
                 * @memberof transit_realtime.TranslatedImage
                 * @interface ILocalizedImage
                 * @property {string} url LocalizedImage url
                 * @property {string} mediaType LocalizedImage mediaType
                 * @property {string|null} [language] LocalizedImage language
                 */
    
                /**
                 * Constructs a new LocalizedImage.
                 * @memberof transit_realtime.TranslatedImage
                 * @classdesc Represents a LocalizedImage.
                 * @implements ILocalizedImage
                 * @constructor
                 * @param {transit_realtime.TranslatedImage.ILocalizedImage=} [properties] Properties to set
                 */
                function LocalizedImage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * LocalizedImage url.
                 * @member {string} url
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @instance
                 */
                LocalizedImage.prototype.url = "";
    
                /**
                 * LocalizedImage mediaType.
                 * @member {string} mediaType
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @instance
                 */
                LocalizedImage.prototype.mediaType = "";
    
                /**
                 * LocalizedImage language.
                 * @member {string} language
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @instance
                 */
                LocalizedImage.prototype.language = "";
    
                /**
                 * Creates a new LocalizedImage instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @static
                 * @param {transit_realtime.TranslatedImage.ILocalizedImage=} [properties] Properties to set
                 * @returns {transit_realtime.TranslatedImage.LocalizedImage} LocalizedImage instance
                 */
                LocalizedImage.create = function create(properties) {
                    return new LocalizedImage(properties);
                };
    
                /**
                 * Decodes a LocalizedImage message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TranslatedImage.LocalizedImage} LocalizedImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LocalizedImage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TranslatedImage.LocalizedImage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.url = reader.string();
                                break;
                            }
                        case 2: {
                                message.mediaType = reader.string();
                                break;
                            }
                        case 3: {
                                message.language = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("url"))
                        throw $util.ProtocolError("missing required 'url'", { instance: message });
                    if (!message.hasOwnProperty("mediaType"))
                        throw $util.ProtocolError("missing required 'mediaType'", { instance: message });
                    return message;
                };
    
                /**
                 * Decodes a LocalizedImage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TranslatedImage.LocalizedImage} LocalizedImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                LocalizedImage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a LocalizedImage message.
                 * @function verify
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                LocalizedImage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.url))
                        return "url: string expected";
                    if (!$util.isString(message.mediaType))
                        return "mediaType: string expected";
                    if (message.language != null && message.hasOwnProperty("language"))
                        if (!$util.isString(message.language))
                            return "language: string expected";
                    return null;
                };
    
                /**
                 * Creates a LocalizedImage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TranslatedImage.LocalizedImage} LocalizedImage
                 */
                LocalizedImage.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TranslatedImage.LocalizedImage)
                        return object;
                    var message = new $root.transit_realtime.TranslatedImage.LocalizedImage();
                    if (object.url != null)
                        message.url = String(object.url);
                    if (object.mediaType != null)
                        message.mediaType = String(object.mediaType);
                    if (object.language != null)
                        message.language = String(object.language);
                    return message;
                };
    
                /**
                 * Creates a plain object from a LocalizedImage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @static
                 * @param {transit_realtime.TranslatedImage.LocalizedImage} message LocalizedImage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                LocalizedImage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.url = "";
                        object.mediaType = "";
                        object.language = "";
                    }
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    if (message.mediaType != null && message.hasOwnProperty("mediaType"))
                        object.mediaType = message.mediaType;
                    if (message.language != null && message.hasOwnProperty("language"))
                        object.language = message.language;
                    return object;
                };
    
                /**
                 * Converts this LocalizedImage to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                LocalizedImage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for LocalizedImage
                 * @function getTypeUrl
                 * @memberof transit_realtime.TranslatedImage.LocalizedImage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                LocalizedImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TranslatedImage.LocalizedImage";
                };
    
                return LocalizedImage;
            })();
    
            return TranslatedImage;
        })();
    
        transit_realtime.Shape = (function() {
    
            /**
             * Properties of a Shape.
             * @memberof transit_realtime
             * @interface IShape
             * @property {string|null} [shapeId] Shape shapeId
             * @property {string|null} [encodedPolyline] Shape encodedPolyline
             */
    
            /**
             * Constructs a new Shape.
             * @memberof transit_realtime
             * @classdesc Represents a Shape.
             * @implements IShape
             * @constructor
             * @param {transit_realtime.IShape=} [properties] Properties to set
             */
            function Shape(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Shape shapeId.
             * @member {string} shapeId
             * @memberof transit_realtime.Shape
             * @instance
             */
            Shape.prototype.shapeId = "";
    
            /**
             * Shape encodedPolyline.
             * @member {string} encodedPolyline
             * @memberof transit_realtime.Shape
             * @instance
             */
            Shape.prototype.encodedPolyline = "";
    
            /**
             * Creates a new Shape instance using the specified properties.
             * @function create
             * @memberof transit_realtime.Shape
             * @static
             * @param {transit_realtime.IShape=} [properties] Properties to set
             * @returns {transit_realtime.Shape} Shape instance
             */
            Shape.create = function create(properties) {
                return new Shape(properties);
            };
    
            /**
             * Decodes a Shape message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.Shape
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.Shape} Shape
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shape.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.Shape();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.shapeId = reader.string();
                            break;
                        }
                    case 2: {
                            message.encodedPolyline = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Shape message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.Shape
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.Shape} Shape
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Shape.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Shape message.
             * @function verify
             * @memberof transit_realtime.Shape
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Shape.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shapeId != null && message.hasOwnProperty("shapeId"))
                    if (!$util.isString(message.shapeId))
                        return "shapeId: string expected";
                if (message.encodedPolyline != null && message.hasOwnProperty("encodedPolyline"))
                    if (!$util.isString(message.encodedPolyline))
                        return "encodedPolyline: string expected";
                return null;
            };
    
            /**
             * Creates a Shape message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.Shape
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.Shape} Shape
             */
            Shape.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.Shape)
                    return object;
                var message = new $root.transit_realtime.Shape();
                if (object.shapeId != null)
                    message.shapeId = String(object.shapeId);
                if (object.encodedPolyline != null)
                    message.encodedPolyline = String(object.encodedPolyline);
                return message;
            };
    
            /**
             * Creates a plain object from a Shape message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.Shape
             * @static
             * @param {transit_realtime.Shape} message Shape
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Shape.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.shapeId = "";
                    object.encodedPolyline = "";
                }
                if (message.shapeId != null && message.hasOwnProperty("shapeId"))
                    object.shapeId = message.shapeId;
                if (message.encodedPolyline != null && message.hasOwnProperty("encodedPolyline"))
                    object.encodedPolyline = message.encodedPolyline;
                return object;
            };
    
            /**
             * Converts this Shape to JSON.
             * @function toJSON
             * @memberof transit_realtime.Shape
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Shape.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Shape
             * @function getTypeUrl
             * @memberof transit_realtime.Shape
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Shape.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.Shape";
            };
    
            return Shape;
        })();
    
        transit_realtime.Stop = (function() {
    
            /**
             * Properties of a Stop.
             * @memberof transit_realtime
             * @interface IStop
             * @property {string|null} [stopId] Stop stopId
             * @property {transit_realtime.ITranslatedString|null} [stopCode] Stop stopCode
             * @property {transit_realtime.ITranslatedString|null} [stopName] Stop stopName
             * @property {transit_realtime.ITranslatedString|null} [ttsStopName] Stop ttsStopName
             * @property {transit_realtime.ITranslatedString|null} [stopDesc] Stop stopDesc
             * @property {number|null} [stopLat] Stop stopLat
             * @property {number|null} [stopLon] Stop stopLon
             * @property {string|null} [zoneId] Stop zoneId
             * @property {transit_realtime.ITranslatedString|null} [stopUrl] Stop stopUrl
             * @property {string|null} [parentStation] Stop parentStation
             * @property {string|null} [stopTimezone] Stop stopTimezone
             * @property {transit_realtime.Stop.WheelchairBoarding|null} [wheelchairBoarding] Stop wheelchairBoarding
             * @property {string|null} [levelId] Stop levelId
             * @property {transit_realtime.ITranslatedString|null} [platformCode] Stop platformCode
             */
    
            /**
             * Constructs a new Stop.
             * @memberof transit_realtime
             * @classdesc Represents a Stop.
             * @implements IStop
             * @constructor
             * @param {transit_realtime.IStop=} [properties] Properties to set
             */
            function Stop(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Stop stopId.
             * @member {string} stopId
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopId = "";
    
            /**
             * Stop stopCode.
             * @member {transit_realtime.ITranslatedString|null|undefined} stopCode
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopCode = null;
    
            /**
             * Stop stopName.
             * @member {transit_realtime.ITranslatedString|null|undefined} stopName
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopName = null;
    
            /**
             * Stop ttsStopName.
             * @member {transit_realtime.ITranslatedString|null|undefined} ttsStopName
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.ttsStopName = null;
    
            /**
             * Stop stopDesc.
             * @member {transit_realtime.ITranslatedString|null|undefined} stopDesc
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopDesc = null;
    
            /**
             * Stop stopLat.
             * @member {number} stopLat
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopLat = 0;
    
            /**
             * Stop stopLon.
             * @member {number} stopLon
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopLon = 0;
    
            /**
             * Stop zoneId.
             * @member {string} zoneId
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.zoneId = "";
    
            /**
             * Stop stopUrl.
             * @member {transit_realtime.ITranslatedString|null|undefined} stopUrl
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopUrl = null;
    
            /**
             * Stop parentStation.
             * @member {string} parentStation
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.parentStation = "";
    
            /**
             * Stop stopTimezone.
             * @member {string} stopTimezone
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.stopTimezone = "";
    
            /**
             * Stop wheelchairBoarding.
             * @member {transit_realtime.Stop.WheelchairBoarding} wheelchairBoarding
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.wheelchairBoarding = 0;
    
            /**
             * Stop levelId.
             * @member {string} levelId
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.levelId = "";
    
            /**
             * Stop platformCode.
             * @member {transit_realtime.ITranslatedString|null|undefined} platformCode
             * @memberof transit_realtime.Stop
             * @instance
             */
            Stop.prototype.platformCode = null;
    
            /**
             * Creates a new Stop instance using the specified properties.
             * @function create
             * @memberof transit_realtime.Stop
             * @static
             * @param {transit_realtime.IStop=} [properties] Properties to set
             * @returns {transit_realtime.Stop} Stop instance
             */
            Stop.create = function create(properties) {
                return new Stop(properties);
            };
    
            /**
             * Decodes a Stop message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.Stop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.Stop} Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stop.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.Stop();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.stopId = reader.string();
                            break;
                        }
                    case 2: {
                            message.stopCode = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.stopName = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.ttsStopName = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.stopDesc = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.stopLat = reader.float();
                            break;
                        }
                    case 7: {
                            message.stopLon = reader.float();
                            break;
                        }
                    case 8: {
                            message.zoneId = reader.string();
                            break;
                        }
                    case 9: {
                            message.stopUrl = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.parentStation = reader.string();
                            break;
                        }
                    case 12: {
                            message.stopTimezone = reader.string();
                            break;
                        }
                    case 13: {
                            message.wheelchairBoarding = reader.int32();
                            break;
                        }
                    case 14: {
                            message.levelId = reader.string();
                            break;
                        }
                    case 15: {
                            message.platformCode = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Stop message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.Stop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.Stop} Stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stop.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Stop message.
             * @function verify
             * @memberof transit_realtime.Stop
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Stop.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    if (!$util.isString(message.stopId))
                        return "stopId: string expected";
                if (message.stopCode != null && message.hasOwnProperty("stopCode")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.stopCode);
                    if (error)
                        return "stopCode." + error;
                }
                if (message.stopName != null && message.hasOwnProperty("stopName")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.stopName);
                    if (error)
                        return "stopName." + error;
                }
                if (message.ttsStopName != null && message.hasOwnProperty("ttsStopName")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.ttsStopName);
                    if (error)
                        return "ttsStopName." + error;
                }
                if (message.stopDesc != null && message.hasOwnProperty("stopDesc")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.stopDesc);
                    if (error)
                        return "stopDesc." + error;
                }
                if (message.stopLat != null && message.hasOwnProperty("stopLat"))
                    if (typeof message.stopLat !== "number")
                        return "stopLat: number expected";
                if (message.stopLon != null && message.hasOwnProperty("stopLon"))
                    if (typeof message.stopLon !== "number")
                        return "stopLon: number expected";
                if (message.zoneId != null && message.hasOwnProperty("zoneId"))
                    if (!$util.isString(message.zoneId))
                        return "zoneId: string expected";
                if (message.stopUrl != null && message.hasOwnProperty("stopUrl")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.stopUrl);
                    if (error)
                        return "stopUrl." + error;
                }
                if (message.parentStation != null && message.hasOwnProperty("parentStation"))
                    if (!$util.isString(message.parentStation))
                        return "parentStation: string expected";
                if (message.stopTimezone != null && message.hasOwnProperty("stopTimezone"))
                    if (!$util.isString(message.stopTimezone))
                        return "stopTimezone: string expected";
                if (message.wheelchairBoarding != null && message.hasOwnProperty("wheelchairBoarding"))
                    switch (message.wheelchairBoarding) {
                    default:
                        return "wheelchairBoarding: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.levelId != null && message.hasOwnProperty("levelId"))
                    if (!$util.isString(message.levelId))
                        return "levelId: string expected";
                if (message.platformCode != null && message.hasOwnProperty("platformCode")) {
                    var error = $root.transit_realtime.TranslatedString.verify(message.platformCode);
                    if (error)
                        return "platformCode." + error;
                }
                return null;
            };
    
            /**
             * Creates a Stop message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.Stop
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.Stop} Stop
             */
            Stop.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.Stop)
                    return object;
                var message = new $root.transit_realtime.Stop();
                if (object.stopId != null)
                    message.stopId = String(object.stopId);
                if (object.stopCode != null) {
                    if (typeof object.stopCode !== "object")
                        throw TypeError(".transit_realtime.Stop.stopCode: object expected");
                    message.stopCode = $root.transit_realtime.TranslatedString.fromObject(object.stopCode);
                }
                if (object.stopName != null) {
                    if (typeof object.stopName !== "object")
                        throw TypeError(".transit_realtime.Stop.stopName: object expected");
                    message.stopName = $root.transit_realtime.TranslatedString.fromObject(object.stopName);
                }
                if (object.ttsStopName != null) {
                    if (typeof object.ttsStopName !== "object")
                        throw TypeError(".transit_realtime.Stop.ttsStopName: object expected");
                    message.ttsStopName = $root.transit_realtime.TranslatedString.fromObject(object.ttsStopName);
                }
                if (object.stopDesc != null) {
                    if (typeof object.stopDesc !== "object")
                        throw TypeError(".transit_realtime.Stop.stopDesc: object expected");
                    message.stopDesc = $root.transit_realtime.TranslatedString.fromObject(object.stopDesc);
                }
                if (object.stopLat != null)
                    message.stopLat = Number(object.stopLat);
                if (object.stopLon != null)
                    message.stopLon = Number(object.stopLon);
                if (object.zoneId != null)
                    message.zoneId = String(object.zoneId);
                if (object.stopUrl != null) {
                    if (typeof object.stopUrl !== "object")
                        throw TypeError(".transit_realtime.Stop.stopUrl: object expected");
                    message.stopUrl = $root.transit_realtime.TranslatedString.fromObject(object.stopUrl);
                }
                if (object.parentStation != null)
                    message.parentStation = String(object.parentStation);
                if (object.stopTimezone != null)
                    message.stopTimezone = String(object.stopTimezone);
                switch (object.wheelchairBoarding) {
                default:
                    if (typeof object.wheelchairBoarding === "number") {
                        message.wheelchairBoarding = object.wheelchairBoarding;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.wheelchairBoarding = 0;
                    break;
                case "AVAILABLE":
                case 1:
                    message.wheelchairBoarding = 1;
                    break;
                case "NOT_AVAILABLE":
                case 2:
                    message.wheelchairBoarding = 2;
                    break;
                }
                if (object.levelId != null)
                    message.levelId = String(object.levelId);
                if (object.platformCode != null) {
                    if (typeof object.platformCode !== "object")
                        throw TypeError(".transit_realtime.Stop.platformCode: object expected");
                    message.platformCode = $root.transit_realtime.TranslatedString.fromObject(object.platformCode);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Stop message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.Stop
             * @static
             * @param {transit_realtime.Stop} message Stop
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Stop.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stopId = "";
                    object.stopCode = null;
                    object.stopName = null;
                    object.ttsStopName = null;
                    object.stopDesc = null;
                    object.stopLat = 0;
                    object.stopLon = 0;
                    object.zoneId = "";
                    object.stopUrl = null;
                    object.parentStation = "";
                    object.stopTimezone = "";
                    object.wheelchairBoarding = options.enums === String ? "UNKNOWN" : 0;
                    object.levelId = "";
                    object.platformCode = null;
                }
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    object.stopId = message.stopId;
                if (message.stopCode != null && message.hasOwnProperty("stopCode"))
                    object.stopCode = $root.transit_realtime.TranslatedString.toObject(message.stopCode, options);
                if (message.stopName != null && message.hasOwnProperty("stopName"))
                    object.stopName = $root.transit_realtime.TranslatedString.toObject(message.stopName, options);
                if (message.ttsStopName != null && message.hasOwnProperty("ttsStopName"))
                    object.ttsStopName = $root.transit_realtime.TranslatedString.toObject(message.ttsStopName, options);
                if (message.stopDesc != null && message.hasOwnProperty("stopDesc"))
                    object.stopDesc = $root.transit_realtime.TranslatedString.toObject(message.stopDesc, options);
                if (message.stopLat != null && message.hasOwnProperty("stopLat"))
                    object.stopLat = options.json && !isFinite(message.stopLat) ? String(message.stopLat) : message.stopLat;
                if (message.stopLon != null && message.hasOwnProperty("stopLon"))
                    object.stopLon = options.json && !isFinite(message.stopLon) ? String(message.stopLon) : message.stopLon;
                if (message.zoneId != null && message.hasOwnProperty("zoneId"))
                    object.zoneId = message.zoneId;
                if (message.stopUrl != null && message.hasOwnProperty("stopUrl"))
                    object.stopUrl = $root.transit_realtime.TranslatedString.toObject(message.stopUrl, options);
                if (message.parentStation != null && message.hasOwnProperty("parentStation"))
                    object.parentStation = message.parentStation;
                if (message.stopTimezone != null && message.hasOwnProperty("stopTimezone"))
                    object.stopTimezone = message.stopTimezone;
                if (message.wheelchairBoarding != null && message.hasOwnProperty("wheelchairBoarding"))
                    object.wheelchairBoarding = options.enums === String ? $root.transit_realtime.Stop.WheelchairBoarding[message.wheelchairBoarding] === undefined ? message.wheelchairBoarding : $root.transit_realtime.Stop.WheelchairBoarding[message.wheelchairBoarding] : message.wheelchairBoarding;
                if (message.levelId != null && message.hasOwnProperty("levelId"))
                    object.levelId = message.levelId;
                if (message.platformCode != null && message.hasOwnProperty("platformCode"))
                    object.platformCode = $root.transit_realtime.TranslatedString.toObject(message.platformCode, options);
                return object;
            };
    
            /**
             * Converts this Stop to JSON.
             * @function toJSON
             * @memberof transit_realtime.Stop
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Stop.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for Stop
             * @function getTypeUrl
             * @memberof transit_realtime.Stop
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Stop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.Stop";
            };
    
            /**
             * WheelchairBoarding enum.
             * @name transit_realtime.Stop.WheelchairBoarding
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} AVAILABLE=1 AVAILABLE value
             * @property {number} NOT_AVAILABLE=2 NOT_AVAILABLE value
             */
            Stop.WheelchairBoarding = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "AVAILABLE"] = 1;
                values[valuesById[2] = "NOT_AVAILABLE"] = 2;
                return values;
            })();
    
            return Stop;
        })();
    
        transit_realtime.TripModifications = (function() {
    
            /**
             * Properties of a TripModifications.
             * @memberof transit_realtime
             * @interface ITripModifications
             * @property {Array.<transit_realtime.TripModifications.ISelectedTrips>|null} [selectedTrips] TripModifications selectedTrips
             * @property {Array.<string>|null} [startTimes] TripModifications startTimes
             * @property {Array.<string>|null} [serviceDates] TripModifications serviceDates
             * @property {Array.<transit_realtime.TripModifications.IModification>|null} [modifications] TripModifications modifications
             */
    
            /**
             * Constructs a new TripModifications.
             * @memberof transit_realtime
             * @classdesc Represents a TripModifications.
             * @implements ITripModifications
             * @constructor
             * @param {transit_realtime.ITripModifications=} [properties] Properties to set
             */
            function TripModifications(properties) {
                this.selectedTrips = [];
                this.startTimes = [];
                this.serviceDates = [];
                this.modifications = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TripModifications selectedTrips.
             * @member {Array.<transit_realtime.TripModifications.ISelectedTrips>} selectedTrips
             * @memberof transit_realtime.TripModifications
             * @instance
             */
            TripModifications.prototype.selectedTrips = $util.emptyArray;
    
            /**
             * TripModifications startTimes.
             * @member {Array.<string>} startTimes
             * @memberof transit_realtime.TripModifications
             * @instance
             */
            TripModifications.prototype.startTimes = $util.emptyArray;
    
            /**
             * TripModifications serviceDates.
             * @member {Array.<string>} serviceDates
             * @memberof transit_realtime.TripModifications
             * @instance
             */
            TripModifications.prototype.serviceDates = $util.emptyArray;
    
            /**
             * TripModifications modifications.
             * @member {Array.<transit_realtime.TripModifications.IModification>} modifications
             * @memberof transit_realtime.TripModifications
             * @instance
             */
            TripModifications.prototype.modifications = $util.emptyArray;
    
            /**
             * Creates a new TripModifications instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TripModifications
             * @static
             * @param {transit_realtime.ITripModifications=} [properties] Properties to set
             * @returns {transit_realtime.TripModifications} TripModifications instance
             */
            TripModifications.create = function create(properties) {
                return new TripModifications(properties);
            };
    
            /**
             * Decodes a TripModifications message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TripModifications
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TripModifications} TripModifications
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripModifications.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripModifications();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.selectedTrips && message.selectedTrips.length))
                                message.selectedTrips = [];
                            message.selectedTrips.push($root.transit_realtime.TripModifications.SelectedTrips.decode(reader, reader.uint32()));
                            break;
                        }
                    case 2: {
                            if (!(message.startTimes && message.startTimes.length))
                                message.startTimes = [];
                            message.startTimes.push(reader.string());
                            break;
                        }
                    case 3: {
                            if (!(message.serviceDates && message.serviceDates.length))
                                message.serviceDates = [];
                            message.serviceDates.push(reader.string());
                            break;
                        }
                    case 4: {
                            if (!(message.modifications && message.modifications.length))
                                message.modifications = [];
                            message.modifications.push($root.transit_realtime.TripModifications.Modification.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TripModifications message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TripModifications
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TripModifications} TripModifications
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripModifications.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TripModifications message.
             * @function verify
             * @memberof transit_realtime.TripModifications
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TripModifications.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.selectedTrips != null && message.hasOwnProperty("selectedTrips")) {
                    if (!Array.isArray(message.selectedTrips))
                        return "selectedTrips: array expected";
                    for (var i = 0; i < message.selectedTrips.length; ++i) {
                        var error = $root.transit_realtime.TripModifications.SelectedTrips.verify(message.selectedTrips[i]);
                        if (error)
                            return "selectedTrips." + error;
                    }
                }
                if (message.startTimes != null && message.hasOwnProperty("startTimes")) {
                    if (!Array.isArray(message.startTimes))
                        return "startTimes: array expected";
                    for (var i = 0; i < message.startTimes.length; ++i)
                        if (!$util.isString(message.startTimes[i]))
                            return "startTimes: string[] expected";
                }
                if (message.serviceDates != null && message.hasOwnProperty("serviceDates")) {
                    if (!Array.isArray(message.serviceDates))
                        return "serviceDates: array expected";
                    for (var i = 0; i < message.serviceDates.length; ++i)
                        if (!$util.isString(message.serviceDates[i]))
                            return "serviceDates: string[] expected";
                }
                if (message.modifications != null && message.hasOwnProperty("modifications")) {
                    if (!Array.isArray(message.modifications))
                        return "modifications: array expected";
                    for (var i = 0; i < message.modifications.length; ++i) {
                        var error = $root.transit_realtime.TripModifications.Modification.verify(message.modifications[i]);
                        if (error)
                            return "modifications." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TripModifications message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TripModifications
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TripModifications} TripModifications
             */
            TripModifications.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TripModifications)
                    return object;
                var message = new $root.transit_realtime.TripModifications();
                if (object.selectedTrips) {
                    if (!Array.isArray(object.selectedTrips))
                        throw TypeError(".transit_realtime.TripModifications.selectedTrips: array expected");
                    message.selectedTrips = [];
                    for (var i = 0; i < object.selectedTrips.length; ++i) {
                        if (typeof object.selectedTrips[i] !== "object")
                            throw TypeError(".transit_realtime.TripModifications.selectedTrips: object expected");
                        message.selectedTrips[i] = $root.transit_realtime.TripModifications.SelectedTrips.fromObject(object.selectedTrips[i]);
                    }
                }
                if (object.startTimes) {
                    if (!Array.isArray(object.startTimes))
                        throw TypeError(".transit_realtime.TripModifications.startTimes: array expected");
                    message.startTimes = [];
                    for (var i = 0; i < object.startTimes.length; ++i)
                        message.startTimes[i] = String(object.startTimes[i]);
                }
                if (object.serviceDates) {
                    if (!Array.isArray(object.serviceDates))
                        throw TypeError(".transit_realtime.TripModifications.serviceDates: array expected");
                    message.serviceDates = [];
                    for (var i = 0; i < object.serviceDates.length; ++i)
                        message.serviceDates[i] = String(object.serviceDates[i]);
                }
                if (object.modifications) {
                    if (!Array.isArray(object.modifications))
                        throw TypeError(".transit_realtime.TripModifications.modifications: array expected");
                    message.modifications = [];
                    for (var i = 0; i < object.modifications.length; ++i) {
                        if (typeof object.modifications[i] !== "object")
                            throw TypeError(".transit_realtime.TripModifications.modifications: object expected");
                        message.modifications[i] = $root.transit_realtime.TripModifications.Modification.fromObject(object.modifications[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TripModifications message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TripModifications
             * @static
             * @param {transit_realtime.TripModifications} message TripModifications
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TripModifications.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.selectedTrips = [];
                    object.startTimes = [];
                    object.serviceDates = [];
                    object.modifications = [];
                }
                if (message.selectedTrips && message.selectedTrips.length) {
                    object.selectedTrips = [];
                    for (var j = 0; j < message.selectedTrips.length; ++j)
                        object.selectedTrips[j] = $root.transit_realtime.TripModifications.SelectedTrips.toObject(message.selectedTrips[j], options);
                }
                if (message.startTimes && message.startTimes.length) {
                    object.startTimes = [];
                    for (var j = 0; j < message.startTimes.length; ++j)
                        object.startTimes[j] = message.startTimes[j];
                }
                if (message.serviceDates && message.serviceDates.length) {
                    object.serviceDates = [];
                    for (var j = 0; j < message.serviceDates.length; ++j)
                        object.serviceDates[j] = message.serviceDates[j];
                }
                if (message.modifications && message.modifications.length) {
                    object.modifications = [];
                    for (var j = 0; j < message.modifications.length; ++j)
                        object.modifications[j] = $root.transit_realtime.TripModifications.Modification.toObject(message.modifications[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TripModifications to JSON.
             * @function toJSON
             * @memberof transit_realtime.TripModifications
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TripModifications.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for TripModifications
             * @function getTypeUrl
             * @memberof transit_realtime.TripModifications
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TripModifications.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.TripModifications";
            };
    
            TripModifications.Modification = (function() {
    
                /**
                 * Properties of a Modification.
                 * @memberof transit_realtime.TripModifications
                 * @interface IModification
                 * @property {transit_realtime.IStopSelector|null} [startStopSelector] Modification startStopSelector
                 * @property {transit_realtime.IStopSelector|null} [endStopSelector] Modification endStopSelector
                 * @property {number|null} [propagatedModificationDelay] Modification propagatedModificationDelay
                 * @property {Array.<transit_realtime.IReplacementStop>|null} [replacementStops] Modification replacementStops
                 * @property {string|null} [serviceAlertId] Modification serviceAlertId
                 * @property {number|Long|null} [lastModifiedTime] Modification lastModifiedTime
                 */
    
                /**
                 * Constructs a new Modification.
                 * @memberof transit_realtime.TripModifications
                 * @classdesc Represents a Modification.
                 * @implements IModification
                 * @constructor
                 * @param {transit_realtime.TripModifications.IModification=} [properties] Properties to set
                 */
                function Modification(properties) {
                    this.replacementStops = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Modification startStopSelector.
                 * @member {transit_realtime.IStopSelector|null|undefined} startStopSelector
                 * @memberof transit_realtime.TripModifications.Modification
                 * @instance
                 */
                Modification.prototype.startStopSelector = null;
    
                /**
                 * Modification endStopSelector.
                 * @member {transit_realtime.IStopSelector|null|undefined} endStopSelector
                 * @memberof transit_realtime.TripModifications.Modification
                 * @instance
                 */
                Modification.prototype.endStopSelector = null;
    
                /**
                 * Modification propagatedModificationDelay.
                 * @member {number} propagatedModificationDelay
                 * @memberof transit_realtime.TripModifications.Modification
                 * @instance
                 */
                Modification.prototype.propagatedModificationDelay = 0;
    
                /**
                 * Modification replacementStops.
                 * @member {Array.<transit_realtime.IReplacementStop>} replacementStops
                 * @memberof transit_realtime.TripModifications.Modification
                 * @instance
                 */
                Modification.prototype.replacementStops = $util.emptyArray;
    
                /**
                 * Modification serviceAlertId.
                 * @member {string} serviceAlertId
                 * @memberof transit_realtime.TripModifications.Modification
                 * @instance
                 */
                Modification.prototype.serviceAlertId = "";
    
                /**
                 * Modification lastModifiedTime.
                 * @member {number|Long} lastModifiedTime
                 * @memberof transit_realtime.TripModifications.Modification
                 * @instance
                 */
                Modification.prototype.lastModifiedTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new Modification instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TripModifications.Modification
                 * @static
                 * @param {transit_realtime.TripModifications.IModification=} [properties] Properties to set
                 * @returns {transit_realtime.TripModifications.Modification} Modification instance
                 */
                Modification.create = function create(properties) {
                    return new Modification(properties);
                };
    
                /**
                 * Decodes a Modification message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TripModifications.Modification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TripModifications.Modification} Modification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Modification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripModifications.Modification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.startStopSelector = $root.transit_realtime.StopSelector.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.endStopSelector = $root.transit_realtime.StopSelector.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.propagatedModificationDelay = reader.int32();
                                break;
                            }
                        case 4: {
                                if (!(message.replacementStops && message.replacementStops.length))
                                    message.replacementStops = [];
                                message.replacementStops.push($root.transit_realtime.ReplacementStop.decode(reader, reader.uint32()));
                                break;
                            }
                        case 5: {
                                message.serviceAlertId = reader.string();
                                break;
                            }
                        case 6: {
                                message.lastModifiedTime = reader.uint64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Modification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TripModifications.Modification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TripModifications.Modification} Modification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Modification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Modification message.
                 * @function verify
                 * @memberof transit_realtime.TripModifications.Modification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Modification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.startStopSelector != null && message.hasOwnProperty("startStopSelector")) {
                        var error = $root.transit_realtime.StopSelector.verify(message.startStopSelector);
                        if (error)
                            return "startStopSelector." + error;
                    }
                    if (message.endStopSelector != null && message.hasOwnProperty("endStopSelector")) {
                        var error = $root.transit_realtime.StopSelector.verify(message.endStopSelector);
                        if (error)
                            return "endStopSelector." + error;
                    }
                    if (message.propagatedModificationDelay != null && message.hasOwnProperty("propagatedModificationDelay"))
                        if (!$util.isInteger(message.propagatedModificationDelay))
                            return "propagatedModificationDelay: integer expected";
                    if (message.replacementStops != null && message.hasOwnProperty("replacementStops")) {
                        if (!Array.isArray(message.replacementStops))
                            return "replacementStops: array expected";
                        for (var i = 0; i < message.replacementStops.length; ++i) {
                            var error = $root.transit_realtime.ReplacementStop.verify(message.replacementStops[i]);
                            if (error)
                                return "replacementStops." + error;
                        }
                    }
                    if (message.serviceAlertId != null && message.hasOwnProperty("serviceAlertId"))
                        if (!$util.isString(message.serviceAlertId))
                            return "serviceAlertId: string expected";
                    if (message.lastModifiedTime != null && message.hasOwnProperty("lastModifiedTime"))
                        if (!$util.isInteger(message.lastModifiedTime) && !(message.lastModifiedTime && $util.isInteger(message.lastModifiedTime.low) && $util.isInteger(message.lastModifiedTime.high)))
                            return "lastModifiedTime: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a Modification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TripModifications.Modification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TripModifications.Modification} Modification
                 */
                Modification.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TripModifications.Modification)
                        return object;
                    var message = new $root.transit_realtime.TripModifications.Modification();
                    if (object.startStopSelector != null) {
                        if (typeof object.startStopSelector !== "object")
                            throw TypeError(".transit_realtime.TripModifications.Modification.startStopSelector: object expected");
                        message.startStopSelector = $root.transit_realtime.StopSelector.fromObject(object.startStopSelector);
                    }
                    if (object.endStopSelector != null) {
                        if (typeof object.endStopSelector !== "object")
                            throw TypeError(".transit_realtime.TripModifications.Modification.endStopSelector: object expected");
                        message.endStopSelector = $root.transit_realtime.StopSelector.fromObject(object.endStopSelector);
                    }
                    if (object.propagatedModificationDelay != null)
                        message.propagatedModificationDelay = object.propagatedModificationDelay | 0;
                    if (object.replacementStops) {
                        if (!Array.isArray(object.replacementStops))
                            throw TypeError(".transit_realtime.TripModifications.Modification.replacementStops: array expected");
                        message.replacementStops = [];
                        for (var i = 0; i < object.replacementStops.length; ++i) {
                            if (typeof object.replacementStops[i] !== "object")
                                throw TypeError(".transit_realtime.TripModifications.Modification.replacementStops: object expected");
                            message.replacementStops[i] = $root.transit_realtime.ReplacementStop.fromObject(object.replacementStops[i]);
                        }
                    }
                    if (object.serviceAlertId != null)
                        message.serviceAlertId = String(object.serviceAlertId);
                    if (object.lastModifiedTime != null)
                        if ($util.Long)
                            (message.lastModifiedTime = $util.Long.fromValue(object.lastModifiedTime)).unsigned = true;
                        else if (typeof object.lastModifiedTime === "string")
                            message.lastModifiedTime = parseInt(object.lastModifiedTime, 10);
                        else if (typeof object.lastModifiedTime === "number")
                            message.lastModifiedTime = object.lastModifiedTime;
                        else if (typeof object.lastModifiedTime === "object")
                            message.lastModifiedTime = new $util.LongBits(object.lastModifiedTime.low >>> 0, object.lastModifiedTime.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Modification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TripModifications.Modification
                 * @static
                 * @param {transit_realtime.TripModifications.Modification} message Modification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Modification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.replacementStops = [];
                    if (options.defaults) {
                        object.startStopSelector = null;
                        object.endStopSelector = null;
                        object.propagatedModificationDelay = 0;
                        object.serviceAlertId = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.lastModifiedTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.lastModifiedTime = options.longs === String ? "0" : 0;
                    }
                    if (message.startStopSelector != null && message.hasOwnProperty("startStopSelector"))
                        object.startStopSelector = $root.transit_realtime.StopSelector.toObject(message.startStopSelector, options);
                    if (message.endStopSelector != null && message.hasOwnProperty("endStopSelector"))
                        object.endStopSelector = $root.transit_realtime.StopSelector.toObject(message.endStopSelector, options);
                    if (message.propagatedModificationDelay != null && message.hasOwnProperty("propagatedModificationDelay"))
                        object.propagatedModificationDelay = message.propagatedModificationDelay;
                    if (message.replacementStops && message.replacementStops.length) {
                        object.replacementStops = [];
                        for (var j = 0; j < message.replacementStops.length; ++j)
                            object.replacementStops[j] = $root.transit_realtime.ReplacementStop.toObject(message.replacementStops[j], options);
                    }
                    if (message.serviceAlertId != null && message.hasOwnProperty("serviceAlertId"))
                        object.serviceAlertId = message.serviceAlertId;
                    if (message.lastModifiedTime != null && message.hasOwnProperty("lastModifiedTime"))
                        if (typeof message.lastModifiedTime === "number")
                            object.lastModifiedTime = options.longs === String ? String(message.lastModifiedTime) : message.lastModifiedTime;
                        else
                            object.lastModifiedTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastModifiedTime) : options.longs === Number ? new $util.LongBits(message.lastModifiedTime.low >>> 0, message.lastModifiedTime.high >>> 0).toNumber(true) : message.lastModifiedTime;
                    return object;
                };
    
                /**
                 * Converts this Modification to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TripModifications.Modification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Modification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Modification
                 * @function getTypeUrl
                 * @memberof transit_realtime.TripModifications.Modification
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Modification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TripModifications.Modification";
                };
    
                return Modification;
            })();
    
            TripModifications.SelectedTrips = (function() {
    
                /**
                 * Properties of a SelectedTrips.
                 * @memberof transit_realtime.TripModifications
                 * @interface ISelectedTrips
                 * @property {Array.<string>|null} [tripIds] SelectedTrips tripIds
                 * @property {string|null} [shapeId] SelectedTrips shapeId
                 */
    
                /**
                 * Constructs a new SelectedTrips.
                 * @memberof transit_realtime.TripModifications
                 * @classdesc Represents a SelectedTrips.
                 * @implements ISelectedTrips
                 * @constructor
                 * @param {transit_realtime.TripModifications.ISelectedTrips=} [properties] Properties to set
                 */
                function SelectedTrips(properties) {
                    this.tripIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SelectedTrips tripIds.
                 * @member {Array.<string>} tripIds
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @instance
                 */
                SelectedTrips.prototype.tripIds = $util.emptyArray;
    
                /**
                 * SelectedTrips shapeId.
                 * @member {string} shapeId
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @instance
                 */
                SelectedTrips.prototype.shapeId = "";
    
                /**
                 * Creates a new SelectedTrips instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @static
                 * @param {transit_realtime.TripModifications.ISelectedTrips=} [properties] Properties to set
                 * @returns {transit_realtime.TripModifications.SelectedTrips} SelectedTrips instance
                 */
                SelectedTrips.create = function create(properties) {
                    return new SelectedTrips(properties);
                };
    
                /**
                 * Decodes a SelectedTrips message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TripModifications.SelectedTrips} SelectedTrips
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SelectedTrips.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripModifications.SelectedTrips();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.tripIds && message.tripIds.length))
                                    message.tripIds = [];
                                message.tripIds.push(reader.string());
                                break;
                            }
                        case 2: {
                                message.shapeId = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SelectedTrips message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TripModifications.SelectedTrips} SelectedTrips
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SelectedTrips.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SelectedTrips message.
                 * @function verify
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SelectedTrips.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tripIds != null && message.hasOwnProperty("tripIds")) {
                        if (!Array.isArray(message.tripIds))
                            return "tripIds: array expected";
                        for (var i = 0; i < message.tripIds.length; ++i)
                            if (!$util.isString(message.tripIds[i]))
                                return "tripIds: string[] expected";
                    }
                    if (message.shapeId != null && message.hasOwnProperty("shapeId"))
                        if (!$util.isString(message.shapeId))
                            return "shapeId: string expected";
                    return null;
                };
    
                /**
                 * Creates a SelectedTrips message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TripModifications.SelectedTrips} SelectedTrips
                 */
                SelectedTrips.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TripModifications.SelectedTrips)
                        return object;
                    var message = new $root.transit_realtime.TripModifications.SelectedTrips();
                    if (object.tripIds) {
                        if (!Array.isArray(object.tripIds))
                            throw TypeError(".transit_realtime.TripModifications.SelectedTrips.tripIds: array expected");
                        message.tripIds = [];
                        for (var i = 0; i < object.tripIds.length; ++i)
                            message.tripIds[i] = String(object.tripIds[i]);
                    }
                    if (object.shapeId != null)
                        message.shapeId = String(object.shapeId);
                    return message;
                };
    
                /**
                 * Creates a plain object from a SelectedTrips message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @static
                 * @param {transit_realtime.TripModifications.SelectedTrips} message SelectedTrips
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SelectedTrips.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tripIds = [];
                    if (options.defaults)
                        object.shapeId = "";
                    if (message.tripIds && message.tripIds.length) {
                        object.tripIds = [];
                        for (var j = 0; j < message.tripIds.length; ++j)
                            object.tripIds[j] = message.tripIds[j];
                    }
                    if (message.shapeId != null && message.hasOwnProperty("shapeId"))
                        object.shapeId = message.shapeId;
                    return object;
                };
    
                /**
                 * Converts this SelectedTrips to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SelectedTrips.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for SelectedTrips
                 * @function getTypeUrl
                 * @memberof transit_realtime.TripModifications.SelectedTrips
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SelectedTrips.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/transit_realtime.TripModifications.SelectedTrips";
                };
    
                return SelectedTrips;
            })();
    
            return TripModifications;
        })();
    
        transit_realtime.StopSelector = (function() {
    
            /**
             * Properties of a StopSelector.
             * @memberof transit_realtime
             * @interface IStopSelector
             * @property {number|null} [stopSequence] StopSelector stopSequence
             * @property {string|null} [stopId] StopSelector stopId
             */
    
            /**
             * Constructs a new StopSelector.
             * @memberof transit_realtime
             * @classdesc Represents a StopSelector.
             * @implements IStopSelector
             * @constructor
             * @param {transit_realtime.IStopSelector=} [properties] Properties to set
             */
            function StopSelector(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * StopSelector stopSequence.
             * @member {number} stopSequence
             * @memberof transit_realtime.StopSelector
             * @instance
             */
            StopSelector.prototype.stopSequence = 0;
    
            /**
             * StopSelector stopId.
             * @member {string} stopId
             * @memberof transit_realtime.StopSelector
             * @instance
             */
            StopSelector.prototype.stopId = "";
    
            /**
             * Creates a new StopSelector instance using the specified properties.
             * @function create
             * @memberof transit_realtime.StopSelector
             * @static
             * @param {transit_realtime.IStopSelector=} [properties] Properties to set
             * @returns {transit_realtime.StopSelector} StopSelector instance
             */
            StopSelector.create = function create(properties) {
                return new StopSelector(properties);
            };
    
            /**
             * Decodes a StopSelector message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.StopSelector
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.StopSelector} StopSelector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopSelector.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.StopSelector();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.stopSequence = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.stopId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StopSelector message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.StopSelector
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.StopSelector} StopSelector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopSelector.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StopSelector message.
             * @function verify
             * @memberof transit_realtime.StopSelector
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StopSelector.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stopSequence != null && message.hasOwnProperty("stopSequence"))
                    if (!$util.isInteger(message.stopSequence))
                        return "stopSequence: integer expected";
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    if (!$util.isString(message.stopId))
                        return "stopId: string expected";
                return null;
            };
    
            /**
             * Creates a StopSelector message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.StopSelector
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.StopSelector} StopSelector
             */
            StopSelector.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.StopSelector)
                    return object;
                var message = new $root.transit_realtime.StopSelector();
                if (object.stopSequence != null)
                    message.stopSequence = object.stopSequence >>> 0;
                if (object.stopId != null)
                    message.stopId = String(object.stopId);
                return message;
            };
    
            /**
             * Creates a plain object from a StopSelector message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.StopSelector
             * @static
             * @param {transit_realtime.StopSelector} message StopSelector
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StopSelector.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stopSequence = 0;
                    object.stopId = "";
                }
                if (message.stopSequence != null && message.hasOwnProperty("stopSequence"))
                    object.stopSequence = message.stopSequence;
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    object.stopId = message.stopId;
                return object;
            };
    
            /**
             * Converts this StopSelector to JSON.
             * @function toJSON
             * @memberof transit_realtime.StopSelector
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StopSelector.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for StopSelector
             * @function getTypeUrl
             * @memberof transit_realtime.StopSelector
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StopSelector.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.StopSelector";
            };
    
            return StopSelector;
        })();
    
        transit_realtime.ReplacementStop = (function() {
    
            /**
             * Properties of a ReplacementStop.
             * @memberof transit_realtime
             * @interface IReplacementStop
             * @property {number|null} [travelTimeToStop] ReplacementStop travelTimeToStop
             * @property {string|null} [stopId] ReplacementStop stopId
             */
    
            /**
             * Constructs a new ReplacementStop.
             * @memberof transit_realtime
             * @classdesc Represents a ReplacementStop.
             * @implements IReplacementStop
             * @constructor
             * @param {transit_realtime.IReplacementStop=} [properties] Properties to set
             */
            function ReplacementStop(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReplacementStop travelTimeToStop.
             * @member {number} travelTimeToStop
             * @memberof transit_realtime.ReplacementStop
             * @instance
             */
            ReplacementStop.prototype.travelTimeToStop = 0;
    
            /**
             * ReplacementStop stopId.
             * @member {string} stopId
             * @memberof transit_realtime.ReplacementStop
             * @instance
             */
            ReplacementStop.prototype.stopId = "";
    
            /**
             * Creates a new ReplacementStop instance using the specified properties.
             * @function create
             * @memberof transit_realtime.ReplacementStop
             * @static
             * @param {transit_realtime.IReplacementStop=} [properties] Properties to set
             * @returns {transit_realtime.ReplacementStop} ReplacementStop instance
             */
            ReplacementStop.create = function create(properties) {
                return new ReplacementStop(properties);
            };
    
            /**
             * Decodes a ReplacementStop message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.ReplacementStop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.ReplacementStop} ReplacementStop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplacementStop.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.ReplacementStop();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.travelTimeToStop = reader.int32();
                            break;
                        }
                    case 2: {
                            message.stopId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ReplacementStop message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.ReplacementStop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.ReplacementStop} ReplacementStop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplacementStop.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ReplacementStop message.
             * @function verify
             * @memberof transit_realtime.ReplacementStop
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReplacementStop.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.travelTimeToStop != null && message.hasOwnProperty("travelTimeToStop"))
                    if (!$util.isInteger(message.travelTimeToStop))
                        return "travelTimeToStop: integer expected";
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    if (!$util.isString(message.stopId))
                        return "stopId: string expected";
                return null;
            };
    
            /**
             * Creates a ReplacementStop message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.ReplacementStop
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.ReplacementStop} ReplacementStop
             */
            ReplacementStop.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.ReplacementStop)
                    return object;
                var message = new $root.transit_realtime.ReplacementStop();
                if (object.travelTimeToStop != null)
                    message.travelTimeToStop = object.travelTimeToStop | 0;
                if (object.stopId != null)
                    message.stopId = String(object.stopId);
                return message;
            };
    
            /**
             * Creates a plain object from a ReplacementStop message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.ReplacementStop
             * @static
             * @param {transit_realtime.ReplacementStop} message ReplacementStop
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReplacementStop.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.travelTimeToStop = 0;
                    object.stopId = "";
                }
                if (message.travelTimeToStop != null && message.hasOwnProperty("travelTimeToStop"))
                    object.travelTimeToStop = message.travelTimeToStop;
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    object.stopId = message.stopId;
                return object;
            };
    
            /**
             * Converts this ReplacementStop to JSON.
             * @function toJSON
             * @memberof transit_realtime.ReplacementStop
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReplacementStop.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ReplacementStop
             * @function getTypeUrl
             * @memberof transit_realtime.ReplacementStop
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReplacementStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/transit_realtime.ReplacementStop";
            };
    
            return ReplacementStop;
        })();
    
        return transit_realtime;
    })();

    return $root;
});
