// 접근 정보를 변수로 저장
const SUPABASE_URL = 'https://iidzveyimcrwoynfmcrz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZHp2ZXlpbWNyd295bmZtY3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNTI3ODAsImV4cCI6MjA2MzcyODc4MH0.gxKjBVX0ubekP3EZ6mHEgxalDBAkpMWCe3PtItCqhe0';

const client = supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);