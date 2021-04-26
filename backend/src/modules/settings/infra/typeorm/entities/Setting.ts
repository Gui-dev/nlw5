import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings')
export class Setting {
  @PrimaryColumn()
  public id: string

  @Column()
  public username: string

  @Column()
  public chat: boolean

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
