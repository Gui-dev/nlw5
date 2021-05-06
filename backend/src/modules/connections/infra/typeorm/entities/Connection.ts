import { PrimaryColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, Entity } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@modules/users/infra/typeorm/entities/User'

@Entity('connections')
export class Connection {
  @PrimaryColumn()
  public id: string

  @Column()
  public admin_id: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  public user: User

  @Column()
  public user_id: string

  @Column()
  public socket_id: string

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
