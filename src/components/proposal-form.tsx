"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Fields = {
  name: string;
  email: string;
  company: string;
  need: string;
};

type Errors = Partial<Record<"name" | "email" | "need", string>>;

const empty: Fields = { name: "", email: "", company: "", need: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email.";
  }
  if (fields.need.trim().length < 20) {
    errors.need = "Describe the work in at least a sentence or two.";
  }
  return errors;
}

export function ProposalForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmittedName(null);
      return;
    }
    setSubmittedName(fields.name.trim());
  }

  if (submittedName) {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8" role="status">
        <p className="font-display text-2xl font-semibold text-navy">
          Thanks, {submittedName}.
        </p>
        <p className="mt-3 text-muted">
          The request looks complete. A proposal would start from what you
          described.
        </p>
        <p className="mt-4 text-sm text-muted">{site.formNotice}</p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-teal-deep hover:text-navy"
          onClick={() => {
            setSubmittedName(null);
            setFields(empty);
          }}
        >
          Write another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-paper p-8"
    >
      <div className="grid gap-5">
        <Field
          id="name"
          label="Name"
          value={fields.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={fields.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          autoComplete="email"
        />
        <Field
          id="company"
          label="Company"
          value={fields.company}
          onChange={(value) => update("company", value)}
          autoComplete="organization"
          optional
        />
        <div>
          <label htmlFor="need" className="text-sm font-medium text-foreground">
            What do you want to build?
          </label>
          <textarea
            id="need"
            name="need"
            rows={6}
            value={fields.need}
            onChange={(event) => update("need", event.target.value)}
            aria-invalid={errors.need ? true : undefined}
            aria-describedby={errors.need ? "need-error" : undefined}
            className="mt-2 w-full rounded-xl border border-line bg-background px-3 py-2 text-foreground"
          />
          {errors.need ? (
            <p id="need-error" className="mt-1 text-sm text-navy">
              {errors.need}
            </p>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-deep"
      >
        Request a proposal
      </button>
      <p className="mt-4 text-sm text-muted">{site.formNotice}</p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  optional = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {optional ? <span className="text-muted"> (optional)</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full rounded-xl border border-line bg-background px-3 py-2 text-foreground"
      />
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-navy">
          {error}
        </p>
      ) : null}
    </div>
  );
}
