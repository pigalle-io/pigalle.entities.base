/**
 * This file is part of pigalle.entities.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {EntityBase} = require('../lib/entity-base')

describe('Class {EntityBase}', () => {
  it('should be a function', () => {
    (EntityBase).should.be.a.Function()
  })
})

describe('Create a instance of {EntityBase} using <factory> method', () => {
  it('should be an object', () => {
    (EntityBase.factory()).should.be.an.Object()
  })

  it('should be an instance of {PigalleBaseClass}', () => {
    (EntityBase.factory()).should.be.an.instanceOf(EntityBase)
  })

  it('should have an property named <$pigalle>', () => {
    (EntityBase.factory()).should.have.an.property('$pigalle')
  })

  it('should have an internal property named <type> equals to <entity>', () => {
    (EntityBase.factory().type()).should.be.equal('entity')
  })
})
