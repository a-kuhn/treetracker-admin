`select * from admin_role`

`select * from admin_user where user_name = '${userName}'`

`select * from admin_user where user_name = '${userName}' and password_hash = '${hash}'`

`select * from admin_user_role where admin_user_id = ${userLogin.id}`

`select * from admin_user_role where admin_user_id = ${userId}`

`select * from admin_role where id = ${userDetails.role[0]}`

`select * from admin_user where id=${req.params.userId}`

`select * from admin_user_role where role_id = ${userGet.id}`

`update admin_user set password_hash = '${hash}', salt = '${salt}' where id = ${req.params.userId}`

`delete from admin_user_role where admin_user_id = ${req.params.userId}`

`insert into admin_user_role (role_id, admin_user_id) values (${req.body.role[i]},${req.params.userId})`

`delete from admin_user_role where admin_user_id = ${req.params.userId}`

`delete from admin_user where id = ${req.params.userId}`

`select * from admin_user`

`select * from admin_user_role where admin_user_id = ${r.id}`

`select * from admin_user where user_name = '${req.body.userName}'`
`select * from admin_user where user_name = '${req.body.userName}'`

`delete from admin_user_role where admin_user_id = ${obj.id}`

`insert into admin_user_role (role_id, admin_user_id) values (${req.body.role[i]},${obj.id})`

`select * from admin_user `

'delete from admin_user'
'delete from admin_user_role'
'delete from admin_role'

`insert into admin_role (id, role_name, description, policy) ` +
      `values (1, 'Admin', 'The super administrator role, having all permissions','${JSON.stringify(
        [policy.policies[0], policy.policies[1], policy.policies[2]],
      )}'),` +
      `(2, 'Tree Manager', 'Check, verify, manage trees','${JSON.stringify([
        policy.policies[3],
        policy.policies[4],
      ])}'),` +
      `(3, 'Planter Manager', 'Check, manage planters','${JSON.stringify([
        policy.policies[5],
        policy.policies[6],
      ])}')`

`insert into admin_user (id, user_name, first_name, last_name, password_hash, salt, email, active) ` +
      `values ( 1, 'admin', 'Admin', 'Panel', 'eab8461725c44aa1532ed88de947fe0706c00c31ed6d832218a6cf59d7602559a7d372d42a64130f21f1f33091105548514bca805b81ee1f01a068a7b0fa2d80', 'OglBTs','admin@greenstand.org', true),` +
      `(2, 'test', 'Admin', 'Test', '539430ec2a48fd607b6e06f3c3a7d3f9b46ac5acb7e81b2633678a8fe3ce6216e2abdfa2bc41bbaa438ba55e5149efb7ad522825d9e98df5300b801c7f8d2c86', 'WjSO0T','test@greenstand.org', true)`

`insert into admin_user_role (id, role_id, admin_user_id) ` +
      `values ( 1, 1, 1), ` +
      `(2, 2, 2), ` +
      `(3, 3, 2)`

`select * from admin_user where id = '${user_id}'`

`select * from admin_user_role where admin_user_id = ${user_id}`

