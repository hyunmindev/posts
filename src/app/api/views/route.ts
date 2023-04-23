import { NextRequest, NextResponse } from 'next/server';

import { supabase } from '@/configs/supabase';

const TABLE_NAME = 'views';

export async function PUT(request: NextRequest) {
  const { slug, userID: id } = await request.json();

  const { data } = await supabase //
    .from(TABLE_NAME)
    .select()
    .match({ id, slug })
    .single();

  if (!data) {
    await supabase //
      .from(TABLE_NAME)
      .insert({ count: 1, id, slug });
  }

  if (data) {
    await supabase //
      .from(TABLE_NAME)
      .update({ count: data.count + 1 })
      .match({ id, slug });
  }

  const { data: newData } = await supabase //
    .from(TABLE_NAME)
    .select()
    .match({ id, slug })
    .single();

  return NextResponse.json(newData);
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  const { count } = await supabase
    .from(TABLE_NAME)
    .select('*', { count: 'estimated', head: true })
    .match({ slug });

  return NextResponse.json(count);
}
