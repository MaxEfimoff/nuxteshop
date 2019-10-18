export const commands = {
  'DELETE_BLOG': 'DELETE_BLOG',
  'EDIT_BLOG': 'EDIT_BLOG',
}

const createOption = (name, command) => ({name, command});

// Options for published blogs
const DELETE_BLOG = createOption('Delete blog', commands.DELETE_BLOG);
const EDIT_BLOG = createOption('Edit blog', commands.EDIT_BLOG);

// Options for draft blogs
const DELETE_DRAFT = createOption('Delete draft', commands.DELETE_BLOG);
const EDIT_DRAFT = createOption('Edit draft', commands.EDIT_BLOG);

export const createPublishedOptions = () => [EDIT_BLOG, DELETE_BLOG];
export const createDraftsOptions = () => [EDIT_DRAFT, DELETE_DRAFT];