'use client';

import { Divider, Icon } from '@mui/material';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../../@components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '../../../@components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../@components/ui/input';

import * as z from 'zod';

import React from 'react';
import { UserIcon } from 'lucide-react';

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Sua senha precisa ter no mínimo 6 caracteres, tente novamente.'
  })
});

export function Dashboard() {
  const form = useForm({
    resolver: zodResolver(FormSchema)
  });

  return (
    <div className='flex justify-center'>
      <div className='border rounded-md'>
        <Form {...form}>
          <form className='flex flex-col items-center text-center justify-center'>
            <UserIcon
              className='text-green-900'
              size={33}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <Divider className='w-full m-0' />
                  <FormControl>
                    <Input
                      placeholder='shadcn'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Dashboard;
