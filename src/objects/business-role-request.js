/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * BusinessRoleRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessRoleRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      created_by: 'created_by',
      created_time: 'created_time',
      email: 'email',
      expiration_time: 'expiration_time',
      expiry_time: 'expiry_time',
      finance_role: 'finance_role',
      id: 'id',
      invite_link: 'invite_link',
      ip_role: 'ip_role',
      owner: 'owner',
      role: 'role',
      status: 'status',
      updated_by: 'updated_by',
      updated_time: 'updated_time'
    });
  }

  static get Role (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      ads_rights_reviewer: 'ADS_RIGHTS_REVIEWER',
      employee: 'EMPLOYEE',
      finance_analyst: 'FINANCE_ANALYST',
      finance_editor: 'FINANCE_EDITOR'
    });
  }
  static get Status (): Object {
    return Object.freeze({
      accepted: 'ACCEPTED',
      declined: 'DECLINED',
      expired: 'EXPIRED',
      pending: 'PENDING'
    });
  }

  delete (fields, params): AbstractObject {
    return super.delete(
      params
    );
  }

  get (fields, params): BusinessRoleRequest {
    return this.read(
      fields,
      params
    );
  }

  update (fields, params): BusinessRoleRequest {
    return super.update(
      params
    );
  }
}
