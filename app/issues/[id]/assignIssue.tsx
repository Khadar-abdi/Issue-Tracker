'use client'
import { Select } from '@radix-ui/themes'
import React from 'react'

const AssignIssue = () => {
  return (
    <Select.Root>
        <Select.Trigger  placeholder='Assign...' />
        <Select.Content>
        <Select.Group>
        <Select.Label> Suggestions </Select.Label>
        <Select.Item value='1'> Khader </Select.Item>
        <Select.Item value='2'> Khader </Select.Item>
        <Select.Item value='3'> Khader </Select.Item>

        </Select.Group>

        </Select.Content>
    </Select.Root>
  )
}

export default AssignIssue