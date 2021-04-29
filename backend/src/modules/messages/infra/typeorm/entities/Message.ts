import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@modules/users/infra/typeorm/entities/User'

@Entity('messages')
export class Message {
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
  public text: string

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
