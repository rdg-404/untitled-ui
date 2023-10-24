import { Input } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelecteItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="to-zinc-900 text-3xl font-medium">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between  border-b border-zinc-900 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-700">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-900"
        >
          {/* Input Name */}
          <div className="grid grid-cols-form gap-3 ">
            <label
              htmlFor="firstName"
              className="text-md font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6 ">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Rodrigo" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Paiva" />
              </Input.Root>
            </div>
          </div>

          {/* Input Email */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-md font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="rodrigo@rocketseat.com.br"
              />
            </Input.Root>
          </div>

          {/* Input Photo */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-md font-medium text-zinc-700"
            >
              Your Photo
              <span className="mt-1 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <div>
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          {/* Input Role */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-md font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Student" />
            </Input.Root>
          </div>

          {/* Input Country */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-md font-medium text-zinc-700">
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="BR" text="Brazil" />
              <SelectItem value="US" text="United States" />
            </Select>
          </div>

          {/* Input Timezone */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-md font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a Timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem
                value="utc3"
                text="America Standard Brazilia (UTC-03:00)"
              />
            </Select>
          </div>

          {/* Input Bio */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-md font-medium text-zinc-700">
              Bio
              <span className="mt-1 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-violet-950"
                  >
                    <Bold className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-violet-950"
                  >
                    <Italic className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-violet-950"
                  >
                    <Link className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-violet-950"
                  >
                    <List className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-violet-950"
                  >
                    <ListOrdered
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* Input Projects */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-md font-medium text-zinc-700"
            >
              Projects
              <span className="mt-1 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
