/**
 * This file is part of pigalle.entities.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module entity-base
 * @description A base to create entities usable by the Pigalle framework.
 * @example
 *
 * const {EntityBase} = require('@pigalle/entities.base')
 *
 * // My custom entity extends necessarily {EntityBase}
 * class CustomEntity extends EntityBase {
 *
 * }
 *
 */

const {PigalleBaseClass} = require('@pigalle/core.base.class')

/**
 * The type of this derived class of {PigalleBaseClass}.
 *
 * @type {string}
 */
const PIGALLE_TYPE = 'entity'

class EntityBase extends PigalleBaseClass {
  constructor (...args) {
    super(...args)
    this.setType(PIGALLE_TYPE)
  }
}

module.exports = {}
module.exports.EntityBase = EntityBase
