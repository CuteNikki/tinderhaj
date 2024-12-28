import { SignUpForm } from '@/features/sign-up/components/form';

export function SignUp() {
  return (
    <section className='py-32'>
      <div className='container mx-auto flex flex-col items-center px-4'>
        <SignUpForm />
      </div>
    </section>
  );
}
