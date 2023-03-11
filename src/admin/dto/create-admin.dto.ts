import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ description: '用户名', required: false })
  name: string;

  @ApiProperty({ description: '校区', required: false })
  campus: string;

  @ApiProperty({
    description: '密码',
    required: false,
    minLength: 6,
    maxLength: 12,
  })
  password: string;

  @ApiProperty({ description: '电话', required: false })
  phone: number;

  @ApiProperty({ description: '邮箱', required: false })
  mail: string;

  @ApiProperty({ description: '是否权限开启', required: false })
  status: number;

  @ApiProperty({ description: '权限', required: false })
  permission: number;
}
