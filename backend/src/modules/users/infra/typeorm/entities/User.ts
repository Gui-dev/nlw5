import { Column, CreateDateColumn, Entity, UpdateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  public id: string

  @Column()
  public email: string

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
