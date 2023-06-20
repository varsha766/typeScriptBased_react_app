import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Priority } from '../enums/priority';
import { Status } from '../enums/status';
@Entity() // we have added @Entity() with () sign means typeorm export Entity as decorator factory
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text' }) //this will show filed is a column.column can take argument as object which will contain all options that specify for particula column
  title: string;
  @Column({ type: 'varchar', length: 255 })
  date: string;
  @Column({ type: 'longtext' })
  description: string;
  @Column({ type: 'enum', enum: Priority, default: Priority.normal })
  priority: Priority;
  @Column({ type: 'enum', enum: Status, default: Status.todo })
  status: Status;
}
