/** Properties by which Audit Log connections can be ordered. */
export type AuditLogOrderField =
  /** Order audit log entries by timestamp */
  | 'CREATED_AT';

/** Represents an annotation's information level. */
export type CheckAnnotationLevel =
  /** An annotation indicating an inescapable error. */
  | 'FAILURE'
  /** An annotation indicating some information. */
  | 'NOTICE'
  /** An annotation indicating an ignorable error. */
  | 'WARNING';

/** The possible states for a check suite or run conclusion. */
export type CheckConclusionState =
  /** The check suite or run requires action. */
  | 'ACTION_REQUIRED'
  /** The check suite or run has been cancelled. */
  | 'CANCELLED'
  /** The check suite or run has failed. */
  | 'FAILURE'
  /** The check suite or run was neutral. */
  | 'NEUTRAL'
  /** The check suite or run was skipped. */
  | 'SKIPPED'
  /** The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion. */
  | 'STALE'
  /** The check suite or run has failed at startup. */
  | 'STARTUP_FAILURE'
  /** The check suite or run has succeeded. */
  | 'SUCCESS'
  /** The check suite or run has timed out. */
  | 'TIMED_OUT';

/** The possible types of check runs. */
export type CheckRunType =
  /** Every check run available. */
  | 'ALL'
  /** The latest check run. */
  | 'LATEST';

/** The possible states for a check suite or run status. */
export type CheckStatusState =
  /** The check suite or run has been completed. */
  | 'COMPLETED'
  /** The check suite or run is in progress. */
  | 'IN_PROGRESS'
  /** The check suite or run is in pending state. */
  | 'PENDING'
  /** The check suite or run has been queued. */
  | 'QUEUED'
  /** The check suite or run has been requested. */
  | 'REQUESTED'
  /** The check suite or run is in waiting state. */
  | 'WAITING';

/** Collaborators affiliation level with a subject. */
export type CollaboratorAffiliation =
  /** All collaborators the authenticated user can see. */
  | 'ALL'
  /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
  | 'DIRECT'
  /** All outside collaborators of an organization-owned subject. */
  | 'OUTSIDE';

/** A comment author association with repository. */
export type CommentAuthorAssociation =
  /** Author has been invited to collaborate on the repository. */
  | 'COLLABORATOR'
  /** Author has previously committed to the repository. */
  | 'CONTRIBUTOR'
  /** Author has not previously committed to GitHub. */
  | 'FIRST_TIMER'
  /** Author has not previously committed to the repository. */
  | 'FIRST_TIME_CONTRIBUTOR'
  /** Author is a placeholder for an unclaimed user. */
  | 'MANNEQUIN'
  /** Author is a member of the organization that owns the repository. */
  | 'MEMBER'
  /** Author has no association with the repository. */
  | 'NONE'
  /** Author is the owner of the repository. */
  | 'OWNER';

/** The possible errors that will prevent a user from updating a comment. */
export type CommentCannotUpdateReason =
  /** Unable to create comment because repository is archived. */
  | 'ARCHIVED'
  /** You cannot update this comment */
  | 'DENIED'
  /** You must be the author or have write access to this repository to update this comment. */
  | 'INSUFFICIENT_ACCESS'
  /** Unable to create comment because issue is locked. */
  | 'LOCKED'
  /** You must be logged in to update this comment. */
  | 'LOGIN_REQUIRED'
  /** Repository is under maintenance. */
  | 'MAINTENANCE'
  /** At least one email address must be verified to update this comment. */
  | 'VERIFIED_EMAIL_REQUIRED';

/** Properties by which commit contribution connections can be ordered. */
export type CommitContributionOrderField =
  /** Order commit contributions by how many commits they represent. */
  | 'COMMIT_COUNT'
  /** Order commit contributions by when they were made. */
  | 'OCCURRED_AT';

/** Varying levels of contributions from none to many. */
export type ContributionLevel =
  /** Lowest 25% of days of contributions. */
  | 'FIRST_QUARTILE'
  /** Highest 25% of days of contributions. More contributions than the third quartile. */
  | 'FOURTH_QUARTILE'
  /** No contributions occurred. */
  | 'NONE'
  /** Second lowest 25% of days of contributions. More contributions than the first quartile. */
  | 'SECOND_QUARTILE'
  /** Second highest 25% of days of contributions. More contributions than second quartile, less than the fourth quartile. */
  | 'THIRD_QUARTILE';

/** The possible base permissions for repositories. */
export type DefaultRepositoryPermissionField =
  /** Can read, write, and administrate repos by default */
  | 'ADMIN'
  /** No access */
  | 'NONE'
  /** Can read repos by default */
  | 'READ'
  /** Can read and write repos by default */
  | 'WRITE';

/** Properties by which deployment connections can be ordered. */
export type DeploymentOrderField =
  /** Order collection by creation time */
  | 'CREATED_AT';

/** The possible protection rule types. */
export type DeploymentProtectionRuleType =
  /** Required reviewers */
  | 'REQUIRED_REVIEWERS'
  /** Wait timer */
  | 'WAIT_TIMER';

/** The possible states for a deployment review. */
export type DeploymentReviewState =
  /** The deployment was approved. */
  | 'APPROVED'
  /** The deployment was rejected. */
  | 'REJECTED';

/** The possible states in which a deployment can be. */
export type DeploymentState =
  /** The pending deployment was not updated after 30 minutes. */
  | 'ABANDONED'
  /** The deployment is currently active. */
  | 'ACTIVE'
  /** An inactive transient deployment. */
  | 'DESTROYED'
  /** The deployment experienced an error. */
  | 'ERROR'
  /** The deployment has failed. */
  | 'FAILURE'
  /** The deployment is inactive. */
  | 'INACTIVE'
  /** The deployment is in progress. */
  | 'IN_PROGRESS'
  /** The deployment is pending. */
  | 'PENDING'
  /** The deployment has queued */
  | 'QUEUED'
  /** The deployment is waiting. */
  | 'WAITING';

/** The possible states for a deployment status. */
export type DeploymentStatusState =
  /** The deployment experienced an error. */
  | 'ERROR'
  /** The deployment has failed. */
  | 'FAILURE'
  /** The deployment is inactive. */
  | 'INACTIVE'
  /** The deployment is in progress. */
  | 'IN_PROGRESS'
  /** The deployment is pending. */
  | 'PENDING'
  /** The deployment is queued */
  | 'QUEUED'
  /** The deployment was successful. */
  | 'SUCCESS'
  /** The deployment is waiting. */
  | 'WAITING';

/** The possible sides of a diff. */
export type DiffSide =
  /** The left side of the diff. */
  | 'LEFT'
  /** The right side of the diff. */
  | 'RIGHT';

/** Properties by which discussion connections can be ordered. */
export type DiscussionOrderField =
  /** Order discussions by creation time. */
  | 'CREATED_AT'
  /** Order discussions by most recent modification time. */
  | 'UPDATED_AT';

/** The possible reasons that a Dependabot alert was dismissed. */
export type DismissReason =
  /** A fix has already been started */
  | 'FIX_STARTED'
  /** This alert is inaccurate or incorrect */
  | 'INACCURATE'
  /** Vulnerable code is not actually used */
  | 'NOT_USED'
  /** No bandwidth to fix this */
  | 'NO_BANDWIDTH'
  /** Risk is tolerable to this project */
  | 'TOLERABLE_RISK';

/** Properties by which enterprise administrator invitation connections can be ordered. */
export type EnterpriseAdministratorInvitationOrderField =
  /** Order enterprise administrator member invitations by creation time */
  | 'CREATED_AT';

/** The possible administrator roles in an enterprise account. */
export type EnterpriseAdministratorRole =
  /** Represents a billing manager of the enterprise account. */
  | 'BILLING_MANAGER'
  /** Represents an owner of the enterprise account. */
  | 'OWNER';

/** The possible values for the enterprise base repository permission setting. */
export type EnterpriseDefaultRepositoryPermissionSettingValue =
  /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
  | 'ADMIN'
  /** Organization members will only be able to clone and pull public repositories. */
  | 'NONE'
  /** Organizations in the enterprise choose base repository permissions for their members. */
  | 'NO_POLICY'
  /** Organization members will be able to clone and pull all organization repositories. */
  | 'READ'
  /** Organization members will be able to clone, pull, and push all organization repositories. */
  | 'WRITE';

/** The possible values for an enabled/disabled enterprise setting. */
export type EnterpriseEnabledDisabledSettingValue =
  /** The setting is disabled for organizations in the enterprise. */
  | 'DISABLED'
  /** The setting is enabled for organizations in the enterprise. */
  | 'ENABLED'
  /** There is no policy set for organizations in the enterprise. */
  | 'NO_POLICY';

/** The possible values for an enabled/no policy enterprise setting. */
export type EnterpriseEnabledSettingValue =
  /** The setting is enabled for organizations in the enterprise. */
  | 'ENABLED'
  /** There is no policy set for organizations in the enterprise. */
  | 'NO_POLICY';

/** Properties by which enterprise member connections can be ordered. */
export type EnterpriseMemberOrderField =
  /** Order enterprise members by creation time */
  | 'CREATED_AT'
  /** Order enterprise members by login */
  | 'LOGIN';

/** The possible values for the enterprise members can create repositories setting. */
export type EnterpriseMembersCanCreateRepositoriesSettingValue =
  /** Members will be able to create public and private repositories. */
  | 'ALL'
  /** Members will not be able to create public or private repositories. */
  | 'DISABLED'
  /** Organization administrators choose whether to allow members to create repositories. */
  | 'NO_POLICY'
  /** Members will be able to create only private repositories. */
  | 'PRIVATE'
  /** Members will be able to create only public repositories. */
  | 'PUBLIC';

/** The possible values for the members can make purchases setting. */
export type EnterpriseMembersCanMakePurchasesSettingValue =
  /** The setting is disabled for organizations in the enterprise. */
  | 'DISABLED'
  /** The setting is enabled for organizations in the enterprise. */
  | 'ENABLED';

/** Properties by which Enterprise Server installation connections can be ordered. */
export type EnterpriseServerInstallationOrderField =
  /** Order Enterprise Server installations by creation time */
  | 'CREATED_AT'
  /** Order Enterprise Server installations by customer name */
  | 'CUSTOMER_NAME'
  /** Order Enterprise Server installations by host name */
  | 'HOST_NAME';

/** Properties by which Enterprise Server user account email connections can be ordered. */
export type EnterpriseServerUserAccountEmailOrderField =
  /** Order emails by email */
  | 'EMAIL';

/** Properties by which Enterprise Server user account connections can be ordered. */
export type EnterpriseServerUserAccountOrderField =
  /** Order user accounts by login */
  | 'LOGIN'
  /** Order user accounts by creation time on the Enterprise Server installation */
  | 'REMOTE_CREATED_AT';

/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
export type EnterpriseServerUserAccountsUploadOrderField =
  /** Order user accounts uploads by creation time */
  | 'CREATED_AT';

/** Synchronization state of the Enterprise Server user accounts upload */
export type EnterpriseServerUserAccountsUploadSyncState =
  /** The synchronization of the upload failed. */
  | 'FAILURE'
  /** The synchronization of the upload is pending. */
  | 'PENDING'
  /** The synchronization of the upload succeeded. */
  | 'SUCCESS';

/** The possible roles for enterprise membership. */
export type EnterpriseUserAccountMembershipRole =
  /** The user is a member of the enterprise membership. */
  | 'MEMBER'
  /** The user is an owner of the enterprise membership. */
  | 'OWNER';

/** The possible GitHub Enterprise deployments where this user can exist. */
export type EnterpriseUserDeployment =
  /** The user is part of a GitHub Enterprise Cloud deployment. */
  | 'CLOUD'
  /** The user is part of a GitHub Enterprise Server deployment. */
  | 'SERVER';

/** The possible viewed states of a file . */
export type FileViewedState =
  /** The file has new changes since last viewed. */
  | 'DISMISSED'
  /** The file has not been marked as viewed. */
  | 'UNVIEWED'
  /** The file has been marked as viewed. */
  | 'VIEWED';

/** The possible funding platforms for repository funding links. */
export type FundingPlatform =
  /** Community Bridge funding platform. */
  | 'COMMUNITY_BRIDGE'
  /** Custom funding platform. */
  | 'CUSTOM'
  /** GitHub funding platform. */
  | 'GITHUB'
  /** IssueHunt funding platform. */
  | 'ISSUEHUNT'
  /** Ko-fi funding platform. */
  | 'KO_FI'
  /** Liberapay funding platform. */
  | 'LIBERAPAY'
  /** Open Collective funding platform. */
  | 'OPEN_COLLECTIVE'
  /** Otechie funding platform. */
  | 'OTECHIE'
  /** Patreon funding platform. */
  | 'PATREON'
  /** Tidelift funding platform. */
  | 'TIDELIFT';

/** Properties by which gist connections can be ordered. */
export type GistOrderField =
  /** Order gists by creation time */
  | 'CREATED_AT'
  /** Order gists by push time */
  | 'PUSHED_AT'
  /** Order gists by update time */
  | 'UPDATED_AT';

/** The privacy of a Gist */
export type GistPrivacy =
  /** Gists that are public and secret */
  | 'ALL'
  /** Public */
  | 'PUBLIC'
  /** Secret */
  | 'SECRET';

/** The state of a Git signature. */
export type GitSignatureState =
  /** The signing certificate or its chain could not be verified */
  | 'BAD_CERT'
  /** Invalid email used for signing */
  | 'BAD_EMAIL'
  /** Signing key expired */
  | 'EXPIRED_KEY'
  /** Internal error - the GPG verification service misbehaved */
  | 'GPGVERIFY_ERROR'
  /** Internal error - the GPG verification service is unavailable at the moment */
  | 'GPGVERIFY_UNAVAILABLE'
  /** Invalid signature */
  | 'INVALID'
  /** Malformed signature */
  | 'MALFORMED_SIG'
  /** The usage flags for the key that signed this don't allow signing */
  | 'NOT_SIGNING_KEY'
  /** Email used for signing not known to GitHub */
  | 'NO_USER'
  /** Valid signature, though certificate revocation check failed */
  | 'OCSP_ERROR'
  /** Valid signature, pending certificate revocation checking */
  | 'OCSP_PENDING'
  /** One or more certificates in chain has been revoked */
  | 'OCSP_REVOKED'
  /** Key used for signing not known to GitHub */
  | 'UNKNOWN_KEY'
  /** Unknown signature type */
  | 'UNKNOWN_SIG_TYPE'
  /** Unsigned */
  | 'UNSIGNED'
  /** Email used for signing unverified on GitHub */
  | 'UNVERIFIED_EMAIL'
  /** Valid signature and verified by GitHub */
  | 'VALID';

/** The possible states in which authentication can be configured with an identity provider. */
export type IdentityProviderConfigurationState =
  /** Authentication with an identity provider is configured but not enforced. */
  | 'CONFIGURED'
  /** Authentication with an identity provider is configured and enforced. */
  | 'ENFORCED'
  /** Authentication with an identity provider is not configured. */
  | 'UNCONFIGURED';

/** The possible values for the IP allow list enabled setting. */
export type IpAllowListEnabledSettingValue =
  /** The setting is disabled for the owner. */
  | 'DISABLED'
  /** The setting is enabled for the owner. */
  | 'ENABLED';

/** Properties by which IP allow list entry connections can be ordered. */
export type IpAllowListEntryOrderField =
  /** Order IP allow list entries by the allow list value. */
  | 'ALLOW_LIST_VALUE'
  /** Order IP allow list entries by creation time. */
  | 'CREATED_AT';

/** The possible values for the IP allow list configuration for installed GitHub Apps setting. */
export type IpAllowListForInstalledAppsEnabledSettingValue =
  /** The setting is disabled for the owner. */
  | 'DISABLED'
  /** The setting is enabled for the owner. */
  | 'ENABLED';

/** Properties by which issue comment connections can be ordered. */
export type IssueCommentOrderField =
  /** Order issue comments by update time */
  | 'UPDATED_AT';

/** Properties by which issue connections can be ordered. */
export type IssueOrderField =
  /** Order issues by comment count */
  | 'COMMENTS'
  /** Order issues by creation time */
  | 'CREATED_AT'
  /** Order issues by update time */
  | 'UPDATED_AT';

/** The possible states of an issue. */
export type IssueState =
  /** An issue that has been closed */
  | 'CLOSED'
  /** An issue that is still open */
  | 'OPEN';

/** The possible item types found in a timeline. */
export type IssueTimelineItemsItemType =
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  | 'ADDED_TO_PROJECT_EVENT'
  /** Represents an 'assigned' event on any assignable object. */
  | 'ASSIGNED_EVENT'
  /** Represents a 'closed' event on any `Closable`. */
  | 'CLOSED_EVENT'
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  | 'COMMENT_DELETED_EVENT'
  /** Represents a 'connected' event on a given issue or pull request. */
  | 'CONNECTED_EVENT'
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  /** Represents a mention made by one issue or pull request to another. */
  | 'CROSS_REFERENCED_EVENT'
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  | 'DEMILESTONED_EVENT'
  /** Represents a 'disconnected' event on a given issue or pull request. */
  | 'DISCONNECTED_EVENT'
  /** Represents a comment on an Issue. */
  | 'ISSUE_COMMENT'
  /** Represents a 'labeled' event on a given issue or pull request. */
  | 'LABELED_EVENT'
  /** Represents a 'locked' event on a given issue or pull request. */
  | 'LOCKED_EVENT'
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  | 'MARKED_AS_DUPLICATE_EVENT'
  /** Represents a 'mentioned' event on a given issue or pull request. */
  | 'MENTIONED_EVENT'
  /** Represents a 'milestoned' event on a given issue or pull request. */
  | 'MILESTONED_EVENT'
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  /** Represents a 'pinned' event on a given issue or pull request. */
  | 'PINNED_EVENT'
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  | 'REFERENCED_EVENT'
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  | 'REMOVED_FROM_PROJECT_EVENT'
  /** Represents a 'renamed' event on a given issue or pull request */
  | 'RENAMED_TITLE_EVENT'
  /** Represents a 'reopened' event on any `Closable`. */
  | 'REOPENED_EVENT'
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  | 'SUBSCRIBED_EVENT'
  /** Represents a 'transferred' event on a given issue or pull request. */
  | 'TRANSFERRED_EVENT'
  /** Represents an 'unassigned' event on any assignable object. */
  | 'UNASSIGNED_EVENT'
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  | 'UNLABELED_EVENT'
  /** Represents an 'unlocked' event on a given issue or pull request. */
  | 'UNLOCKED_EVENT'
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  | 'UNMARKED_AS_DUPLICATE_EVENT'
  /** Represents an 'unpinned' event on a given issue or pull request. */
  | 'UNPINNED_EVENT'
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  | 'UNSUBSCRIBED_EVENT'
  /** Represents a 'user_blocked' event on a given user. */
  | 'USER_BLOCKED_EVENT';

/** Properties by which label connections can be ordered. */
export type LabelOrderField =
  /** Order labels by creation time */
  | 'CREATED_AT'
  /** Order labels by name  */
  | 'NAME';

/** Properties by which language connections can be ordered. */
export type LanguageOrderField =
  /** Order languages by the size of all files containing the language */
  | 'SIZE';

/** The possible reasons that an issue or pull request was locked. */
export type LockReason =
  /** The issue or pull request was locked because the conversation was off-topic. */
  | 'OFF_TOPIC'
  /** The issue or pull request was locked because the conversation was resolved. */
  | 'RESOLVED'
  /** The issue or pull request was locked because the conversation was spam. */
  | 'SPAM'
  /** The issue or pull request was locked because the conversation was too heated. */
  | 'TOO_HEATED';

/** Whether or not a PullRequest can be merged. */
export type MergeableState =
  /** The pull request cannot be merged due to merge conflicts. */
  | 'CONFLICTING'
  /** The pull request can be merged. */
  | 'MERGEABLE'
  /** The mergeability of the pull request is still being calculated. */
  | 'UNKNOWN';

/** Properties by which milestone connections can be ordered. */
export type MilestoneOrderField =
  /** Order milestones by when they were created. */
  | 'CREATED_AT'
  /** Order milestones by when they are due. */
  | 'DUE_DATE'
  /** Order milestones by their number. */
  | 'NUMBER'
  /** Order milestones by when they were last updated. */
  | 'UPDATED_AT';

/** The possible states of a milestone. */
export type MilestoneState =
  /** A milestone that has been closed. */
  | 'CLOSED'
  /** A milestone that is still open. */
  | 'OPEN';

/** The possible values for the notification restriction setting. */
export type NotificationRestrictionSettingValue =
  /** The setting is disabled for the owner. */
  | 'DISABLED'
  /** The setting is enabled for the owner. */
  | 'ENABLED';

/** The OIDC identity provider type */
export type OidcProviderType =
  /** Azure Active Directory */
  | 'AAD';

/** The state of an OAuth Application when it was created. */
export type OauthApplicationCreateAuditEntryState =
  /** The OAuth Application was active and allowed to have OAuth Accesses. */
  | 'ACTIVE'
  /** The OAuth Application was in the process of being deleted. */
  | 'PENDING_DELETION'
  /** The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns. */
  | 'SUSPENDED';

/** The corresponding operation type for the action */
export type OperationType =
  /** An existing resource was accessed */
  | 'ACCESS'
  /** A resource performed an authentication event */
  | 'AUTHENTICATION'
  /** A new resource was created */
  | 'CREATE'
  /** An existing resource was modified */
  | 'MODIFY'
  /** An existing resource was removed */
  | 'REMOVE'
  /** An existing resource was restored */
  | 'RESTORE'
  /** An existing resource was transferred between multiple resources */
  | 'TRANSFER';

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export type OrderDirection =
  /** Specifies an ascending order for a given `orderBy` argument. */
  | 'ASC'
  /** Specifies a descending order for a given `orderBy` argument. */
  | 'DESC';

/** The permissions available to members on an Organization. */
export type OrgAddMemberAuditEntryPermission =
  /** Can read, clone, push, and add collaborators to repositories. */
  | 'ADMIN'
  /** Can read and clone repositories. */
  | 'READ';

/** The billing plans available for organizations. */
export type OrgCreateAuditEntryBillingPlan =
  /** Team Plan */
  | 'BUSINESS'
  /** Enterprise Cloud Plan */
  | 'BUSINESS_PLUS'
  /** Free Plan */
  | 'FREE'
  /** Tiered Per Seat Plan */
  | 'TIERED_PER_SEAT'
  /** Legacy Unlimited Plan */
  | 'UNLIMITED';

/** The reason a billing manager was removed from an Organization. */
export type OrgRemoveBillingManagerAuditEntryReason =
  /** SAML external identity missing */
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  /** SAML SSO enforcement requires an external identity */
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE';

/** The type of membership a user has with an Organization. */
export type OrgRemoveMemberAuditEntryMembershipType =
  /** Organization administrators have full access and can change several settings, including the names of repositories that belong to the Organization and Owners team membership. In addition, organization admins can delete the organization and all of its repositories. */
  | 'ADMIN'
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  | 'BILLING_MANAGER'
  /** A direct member is a user that is a member of the Organization. */
  | 'DIRECT_MEMBER'
  /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
  | 'OUTSIDE_COLLABORATOR'
  /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the Organization. */
  | 'UNAFFILIATED';

/** The reason a member was removed from an Organization. */
export type OrgRemoveMemberAuditEntryReason =
  /** SAML external identity missing */
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  /** SAML SSO enforcement requires an external identity */
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  /** User was removed from organization during account recovery */
  | 'TWO_FACTOR_ACCOUNT_RECOVERY'
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  /** User account has been deleted */
  | 'USER_ACCOUNT_DELETED';

/** The type of membership a user has with an Organization. */
export type OrgRemoveOutsideCollaboratorAuditEntryMembershipType =
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  | 'BILLING_MANAGER'
  /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
  | 'OUTSIDE_COLLABORATOR'
  /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the organization. */
  | 'UNAFFILIATED';

/** The reason an outside collaborator was removed from an Organization. */
export type OrgRemoveOutsideCollaboratorAuditEntryReason =
  /** SAML external identity missing */
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE';

/** The default permission a repository can have in an Organization. */
export type OrgUpdateDefaultRepositoryPermissionAuditEntryPermission =
  /** Can read, clone, push, and add collaborators to repositories. */
  | 'ADMIN'
  /** No default permission value. */
  | 'NONE'
  /** Can read and clone repositories. */
  | 'READ'
  /** Can read, clone and push to repositories. */
  | 'WRITE';

/** The permissions available to members on an Organization. */
export type OrgUpdateMemberAuditEntryPermission =
  /** Can read, clone, push, and add collaborators to repositories. */
  | 'ADMIN'
  /** Can read and clone repositories. */
  | 'READ';

/** The permissions available for repository creation on an Organization. */
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility =
  /** All organization members are restricted from creating any repositories. */
  | 'ALL'
  /** All organization members are restricted from creating internal repositories. */
  | 'INTERNAL'
  /** All organization members are allowed to create any repositories. */
  | 'NONE'
  /** All organization members are restricted from creating private repositories. */
  | 'PRIVATE'
  /** All organization members are restricted from creating private or internal repositories. */
  | 'PRIVATE_INTERNAL'
  /** All organization members are restricted from creating public repositories. */
  | 'PUBLIC'
  /** All organization members are restricted from creating public or internal repositories. */
  | 'PUBLIC_INTERNAL'
  /** All organization members are restricted from creating public or private repositories. */
  | 'PUBLIC_PRIVATE';

/** The possible organization invitation roles. */
export type OrganizationInvitationRole =
  /** The user is invited to be an admin of the organization. */
  | 'ADMIN'
  /** The user is invited to be a billing manager of the organization. */
  | 'BILLING_MANAGER'
  /** The user is invited to be a direct member of the organization. */
  | 'DIRECT_MEMBER'
  /** The user's previous role will be reinstated. */
  | 'REINSTATE';

/** The possible organization invitation types. */
export type OrganizationInvitationType =
  /** The invitation was to an email address. */
  | 'EMAIL'
  /** The invitation was to an existing user. */
  | 'USER';

/** The possible roles within an organization for its members. */
export type OrganizationMemberRole =
  /** The user is an administrator of the organization. */
  | 'ADMIN'
  /** The user is a member of the organization. */
  | 'MEMBER';

/** The possible values for the members can create repositories setting on an organization. */
export type OrganizationMembersCanCreateRepositoriesSettingValue =
  /** Members will be able to create public and private repositories. */
  | 'ALL'
  /** Members will not be able to create public or private repositories. */
  | 'DISABLED'
  /** Members will be able to create only internal repositories. */
  | 'INTERNAL'
  /** Members will be able to create only private repositories. */
  | 'PRIVATE';

/** Properties by which organization connections can be ordered. */
export type OrganizationOrderField =
  /** Order organizations by creation time */
  | 'CREATED_AT'
  /** Order organizations by login */
  | 'LOGIN';

/** Properties by which package file connections can be ordered. */
export type PackageFileOrderField =
  /** Order package files by creation time */
  | 'CREATED_AT';

/** Properties by which package connections can be ordered. */
export type PackageOrderField =
  /** Order packages by creation time */
  | 'CREATED_AT';

/** The possible types of a package. */
export type PackageType =
  /** A debian package. */
  | 'DEBIAN'
  /** A docker image. */
  | 'DOCKER'
  /** A maven package. */
  | 'MAVEN'
  /** An npm package. */
  | 'NPM'
  /** A nuget package. */
  | 'NUGET'
  /** A python package. */
  | 'PYPI'
  /** A rubygems package. */
  | 'RUBYGEMS';

/** Properties by which package version connections can be ordered. */
export type PackageVersionOrderField =
  /** Order package versions by creation time */
  | 'CREATED_AT';

/** Represents items that can be pinned to a profile page or dashboard. */
export type PinnableItemType =
  /** A gist. */
  | 'GIST'
  /** An issue. */
  | 'ISSUE'
  /** An organization. */
  | 'ORGANIZATION'
  /** A project. */
  | 'PROJECT'
  /** A pull request. */
  | 'PULL_REQUEST'
  /** A repository. */
  | 'REPOSITORY'
  /** A team. */
  | 'TEAM'
  /** A user. */
  | 'USER';

/** Preconfigured gradients that may be used to style discussions pinned within a repository. */
export type PinnedDiscussionGradient =
  /** A gradient of blue to mint */
  | 'BLUE_MINT'
  /** A gradient of blue to purple */
  | 'BLUE_PURPLE'
  /** A gradient of pink to blue */
  | 'PINK_BLUE'
  /** A gradient of purple to coral */
  | 'PURPLE_CORAL'
  /** A gradient of red to orange */
  | 'RED_ORANGE';

/** Preconfigured background patterns that may be used to style discussions pinned within a repository. */
export type PinnedDiscussionPattern =
  /** An upward-facing chevron pattern */
  | 'CHEVRON_UP'
  /** A hollow dot pattern */
  | 'DOT'
  /** A solid dot pattern */
  | 'DOT_FILL'
  /** A heart pattern */
  | 'HEART_FILL'
  /** A plus sign pattern */
  | 'PLUS'
  /** A lightning bolt pattern */
  | 'ZAP';

/** The possible archived states of a project card. */
export type ProjectCardArchivedState =
  /** A project card that is archived */
  | 'ARCHIVED'
  /** A project card that is not archived */
  | 'NOT_ARCHIVED';

/** Various content states of a ProjectCard */
export type ProjectCardState =
  /** The card has content only. */
  | 'CONTENT_ONLY'
  /** The card has a note only. */
  | 'NOTE_ONLY'
  /** The card is redacted. */
  | 'REDACTED';

/** The semantic purpose of the column - todo, in progress, or done. */
export type ProjectColumnPurpose =
  /** The column contains cards which are complete */
  | 'DONE'
  /** The column contains cards which are currently being worked on */
  | 'IN_PROGRESS'
  /** The column contains cards still to be worked on */
  | 'TODO';

/** Properties by which project connections can be ordered. */
export type ProjectOrderField =
  /** Order projects by creation time */
  | 'CREATED_AT'
  /** Order projects by name */
  | 'NAME'
  /** Order projects by update time */
  | 'UPDATED_AT';

/** State of the project; either 'open' or 'closed' */
export type ProjectState =
  /** The project is closed. */
  | 'CLOSED'
  /** The project is open. */
  | 'OPEN';

/** GitHub-provided templates for Projects */
export type ProjectTemplate =
  /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
  | 'AUTOMATED_KANBAN_V2'
  /** Create a board with triggers to automatically move cards across columns with review automation. */
  | 'AUTOMATED_REVIEWS_KANBAN'
  /** Create a board with columns for To do, In progress and Done. */
  | 'BASIC_KANBAN'
  /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
  | 'BUG_TRIAGE';

/** Represents available types of methods to use when merging a pull request. */
export type PullRequestMergeMethod =
  /** Add all commits from the head branch to the base branch with a merge commit. */
  | 'MERGE'
  /** Add all commits from the head branch onto the base branch individually. */
  | 'REBASE'
  /** Combine all commits from the head branch into a single commit in the base branch. */
  | 'SQUASH';

/** Properties by which pull_requests connections can be ordered. */
export type PullRequestOrderField =
  /** Order pull_requests by creation time */
  | 'CREATED_AT'
  /** Order pull_requests by update time */
  | 'UPDATED_AT';

/** The possible states of a pull request review comment. */
export type PullRequestReviewCommentState =
  /** A comment that is part of a pending review */
  | 'PENDING'
  /** A comment that is part of a submitted review */
  | 'SUBMITTED';

/** The review status of a pull request. */
export type PullRequestReviewDecision =
  /** The pull request has received an approving review. */
  | 'APPROVED'
  /** Changes have been requested on the pull request. */
  | 'CHANGES_REQUESTED'
  /** A review is required before the pull request can be merged. */
  | 'REVIEW_REQUIRED';

/** The possible events to perform on a pull request review. */
export type PullRequestReviewEvent =
  /** Submit feedback and approve merging these changes. */
  | 'APPROVE'
  /** Submit general feedback without explicit approval. */
  | 'COMMENT'
  /** Dismiss review so it now longer effects merging. */
  | 'DISMISS'
  /** Submit feedback that must be addressed before merging. */
  | 'REQUEST_CHANGES';

/** The possible states of a pull request review. */
export type PullRequestReviewState =
  /** A review allowing the pull request to merge. */
  | 'APPROVED'
  /** A review blocking the pull request from merging. */
  | 'CHANGES_REQUESTED'
  /** An informational review. */
  | 'COMMENTED'
  /** A review that has been dismissed. */
  | 'DISMISSED'
  /** A review that has not yet been submitted. */
  | 'PENDING';

/** The possible states of a pull request. */
export type PullRequestState =
  /** A pull request that has been closed without being merged. */
  | 'CLOSED'
  /** A pull request that has been closed by being merged. */
  | 'MERGED'
  /** A pull request that is still open. */
  | 'OPEN';

/** The possible item types found in a timeline. */
export type PullRequestTimelineItemsItemType =
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  | 'ADDED_TO_PROJECT_EVENT'
  /** Represents an 'assigned' event on any assignable object. */
  | 'ASSIGNED_EVENT'
  /** Represents a 'automatic_base_change_failed' event on a given pull request. */
  | 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT'
  /** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
  | 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT'
  /** Represents a 'auto_merge_disabled' event on a given pull request. */
  | 'AUTO_MERGE_DISABLED_EVENT'
  /** Represents a 'auto_merge_enabled' event on a given pull request. */
  | 'AUTO_MERGE_ENABLED_EVENT'
  /** Represents a 'auto_rebase_enabled' event on a given pull request. */
  | 'AUTO_REBASE_ENABLED_EVENT'
  /** Represents a 'auto_squash_enabled' event on a given pull request. */
  | 'AUTO_SQUASH_ENABLED_EVENT'
  /** Represents a 'base_ref_changed' event on a given issue or pull request. */
  | 'BASE_REF_CHANGED_EVENT'
  /** Represents a 'base_ref_deleted' event on a given pull request. */
  | 'BASE_REF_DELETED_EVENT'
  /** Represents a 'base_ref_force_pushed' event on a given pull request. */
  | 'BASE_REF_FORCE_PUSHED_EVENT'
  /** Represents a 'closed' event on any `Closable`. */
  | 'CLOSED_EVENT'
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  | 'COMMENT_DELETED_EVENT'
  /** Represents a 'connected' event on a given issue or pull request. */
  | 'CONNECTED_EVENT'
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  /** Represents a 'convert_to_draft' event on a given pull request. */
  | 'CONVERT_TO_DRAFT_EVENT'
  /** Represents a mention made by one issue or pull request to another. */
  | 'CROSS_REFERENCED_EVENT'
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  | 'DEMILESTONED_EVENT'
  /** Represents a 'deployed' event on a given pull request. */
  | 'DEPLOYED_EVENT'
  /** Represents a 'deployment_environment_changed' event on a given pull request. */
  | 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT'
  /** Represents a 'disconnected' event on a given issue or pull request. */
  | 'DISCONNECTED_EVENT'
  /** Represents a 'head_ref_deleted' event on a given pull request. */
  | 'HEAD_REF_DELETED_EVENT'
  /** Represents a 'head_ref_force_pushed' event on a given pull request. */
  | 'HEAD_REF_FORCE_PUSHED_EVENT'
  /** Represents a 'head_ref_restored' event on a given pull request. */
  | 'HEAD_REF_RESTORED_EVENT'
  /** Represents a comment on an Issue. */
  | 'ISSUE_COMMENT'
  /** Represents a 'labeled' event on a given issue or pull request. */
  | 'LABELED_EVENT'
  /** Represents a 'locked' event on a given issue or pull request. */
  | 'LOCKED_EVENT'
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  | 'MARKED_AS_DUPLICATE_EVENT'
  /** Represents a 'mentioned' event on a given issue or pull request. */
  | 'MENTIONED_EVENT'
  /** Represents a 'merged' event on a given pull request. */
  | 'MERGED_EVENT'
  /** Represents a 'milestoned' event on a given issue or pull request. */
  | 'MILESTONED_EVENT'
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  /** Represents a 'pinned' event on a given issue or pull request. */
  | 'PINNED_EVENT'
  /** Represents a Git commit part of a pull request. */
  | 'PULL_REQUEST_COMMIT'
  /** Represents a commit comment thread part of a pull request. */
  | 'PULL_REQUEST_COMMIT_COMMENT_THREAD'
  /** A review object for a given pull request. */
  | 'PULL_REQUEST_REVIEW'
  /** A threaded list of comments for a given pull request. */
  | 'PULL_REQUEST_REVIEW_THREAD'
  /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
  | 'PULL_REQUEST_REVISION_MARKER'
  /** Represents a 'ready_for_review' event on a given pull request. */
  | 'READY_FOR_REVIEW_EVENT'
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  | 'REFERENCED_EVENT'
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  | 'REMOVED_FROM_PROJECT_EVENT'
  /** Represents a 'renamed' event on a given issue or pull request */
  | 'RENAMED_TITLE_EVENT'
  /** Represents a 'reopened' event on any `Closable`. */
  | 'REOPENED_EVENT'
  /** Represents a 'review_dismissed' event on a given issue or pull request. */
  | 'REVIEW_DISMISSED_EVENT'
  /** Represents an 'review_requested' event on a given pull request. */
  | 'REVIEW_REQUESTED_EVENT'
  /** Represents an 'review_request_removed' event on a given pull request. */
  | 'REVIEW_REQUEST_REMOVED_EVENT'
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  | 'SUBSCRIBED_EVENT'
  /** Represents a 'transferred' event on a given issue or pull request. */
  | 'TRANSFERRED_EVENT'
  /** Represents an 'unassigned' event on any assignable object. */
  | 'UNASSIGNED_EVENT'
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  | 'UNLABELED_EVENT'
  /** Represents an 'unlocked' event on a given issue or pull request. */
  | 'UNLOCKED_EVENT'
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  | 'UNMARKED_AS_DUPLICATE_EVENT'
  /** Represents an 'unpinned' event on a given issue or pull request. */
  | 'UNPINNED_EVENT'
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  | 'UNSUBSCRIBED_EVENT'
  /** Represents a 'user_blocked' event on a given user. */
  | 'USER_BLOCKED_EVENT';

/** The possible target states when updating a pull request. */
export type PullRequestUpdateState =
  /** A pull request that has been closed without being merged. */
  | 'CLOSED'
  /** A pull request that is still open. */
  | 'OPEN';

/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export type ReactionContent =
  /** Represents the `:confused:` emoji. */
  | 'CONFUSED'
  /** Represents the `:eyes:` emoji. */
  | 'EYES'
  /** Represents the `:heart:` emoji. */
  | 'HEART'
  /** Represents the `:hooray:` emoji. */
  | 'HOORAY'
  /** Represents the `:laugh:` emoji. */
  | 'LAUGH'
  /** Represents the `:rocket:` emoji. */
  | 'ROCKET'
  /** Represents the `:-1:` emoji. */
  | 'THUMBS_DOWN'
  /** Represents the `:+1:` emoji. */
  | 'THUMBS_UP';

/** A list of fields that reactions can be ordered by. */
export type ReactionOrderField =
  /** Allows ordering a list of reactions by when they were created. */
  | 'CREATED_AT';

/** Properties by which ref connections can be ordered. */
export type RefOrderField =
  /** Order refs by their alphanumeric name */
  | 'ALPHABETICAL'
  /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
  | 'TAG_COMMIT_DATE';

/** Properties by which release connections can be ordered. */
export type ReleaseOrderField =
  /** Order releases by creation time */
  | 'CREATED_AT'
  /** Order releases alphabetically by name */
  | 'NAME';

/** The privacy of a repository */
export type RepoAccessAuditEntryVisibility =
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** The privacy of a repository */
export type RepoAddMemberAuditEntryVisibility =
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** The privacy of a repository */
export type RepoArchivedAuditEntryVisibility =
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** The merge options available for pull requests to this repository. */
export type RepoChangeMergeSettingAuditEntryMergeType =
  /** The pull request is added to the base branch in a merge commit. */
  | 'MERGE'
  /** Commits from the pull request are added onto the base branch individually without a merge commit. */
  | 'REBASE'
  /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
  | 'SQUASH';

/** The privacy of a repository */
export type RepoCreateAuditEntryVisibility =
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** The privacy of a repository */
export type RepoDestroyAuditEntryVisibility =
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** The privacy of a repository */
export type RepoRemoveMemberAuditEntryVisibility =
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** The reasons a piece of content can be reported or minimized. */
export type ReportedContentClassifiers =
  /** An abusive or harassing piece of content */
  | 'ABUSE'
  /** A duplicated piece of content */
  | 'DUPLICATE'
  /** An irrelevant piece of content */
  | 'OFF_TOPIC'
  /** An outdated piece of content */
  | 'OUTDATED'
  /** The content has been resolved */
  | 'RESOLVED'
  /** A spammy piece of content */
  | 'SPAM';

/** The affiliation of a user to a repository */
export type RepositoryAffiliation =
  /** Repositories that the user has been added to as a collaborator. */
  | 'COLLABORATOR'
  /** Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on. */
  | 'ORGANIZATION_MEMBER'
  /** Repositories that are owned by the authenticated user. */
  | 'OWNER';

/** The reason a repository is listed as 'contributed'. */
export type RepositoryContributionType =
  /** Created a commit */
  | 'COMMIT'
  /** Created an issue */
  | 'ISSUE'
  /** Created a pull request */
  | 'PULL_REQUEST'
  /** Reviewed a pull request */
  | 'PULL_REQUEST_REVIEW'
  /** Created the repository */
  | 'REPOSITORY';

/** A repository interaction limit. */
export type RepositoryInteractionLimit =
  /** Users that are not collaborators will not be able to interact with the repository. */
  | 'COLLABORATORS_ONLY'
  /** Users that have not previously committed to a repository’s default branch will be unable to interact with the repository. */
  | 'CONTRIBUTORS_ONLY'
  /** Users that have recently created their account will be unable to interact with the repository. */
  | 'EXISTING_USERS'
  /** No interaction limits are enabled. */
  | 'NO_LIMIT';

/** The length for a repository interaction limit to be enabled for. */
export type RepositoryInteractionLimitExpiry =
  /** The interaction limit will expire after 1 day. */
  | 'ONE_DAY'
  /** The interaction limit will expire after 1 month. */
  | 'ONE_MONTH'
  /** The interaction limit will expire after 1 week. */
  | 'ONE_WEEK'
  /** The interaction limit will expire after 6 months. */
  | 'SIX_MONTHS'
  /** The interaction limit will expire after 3 days. */
  | 'THREE_DAYS';

/** Indicates where an interaction limit is configured. */
export type RepositoryInteractionLimitOrigin =
  /** A limit that is configured at the organization level. */
  | 'ORGANIZATION'
  /** A limit that is configured at the repository level. */
  | 'REPOSITORY'
  /** A limit that is configured at the user-wide level. */
  | 'USER';

/** Properties by which repository invitation connections can be ordered. */
export type RepositoryInvitationOrderField =
  /** Order repository invitations by creation time */
  | 'CREATED_AT'
  /** Order repository invitations by invitee login */
  | 'INVITEE_LOGIN';

/** The possible reasons a given repository could be in a locked state. */
export type RepositoryLockReason =
  /** The repository is locked due to a billing related reason. */
  | 'BILLING'
  /** The repository is locked due to a migration. */
  | 'MIGRATING'
  /** The repository is locked due to a move. */
  | 'MOVING'
  /** The repository is locked due to a rename. */
  | 'RENAME';

/** Properties by which repository connections can be ordered. */
export type RepositoryOrderField =
  /** Order repositories by creation time */
  | 'CREATED_AT'
  /** Order repositories by name */
  | 'NAME'
  /** Order repositories by push time */
  | 'PUSHED_AT'
  /** Order repositories by number of stargazers */
  | 'STARGAZERS'
  /** Order repositories by update time */
  | 'UPDATED_AT';

/** The access level to a repository */
export type RepositoryPermission =
  /** Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators */
  | 'ADMIN'
  /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
  | 'MAINTAIN'
  /** Can read and clone this repository. Can also open and comment on issues and pull requests */
  | 'READ'
  /** Can read and clone this repository. Can also manage issues and pull requests */
  | 'TRIAGE'
  /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
  | 'WRITE';

/** The privacy of a repository */
export type RepositoryPrivacy =
  /** Private */
  | 'PRIVATE'
  /** Public */
  | 'PUBLIC';

/** The repository's visibility level. */
export type RepositoryVisibility =
  /** The repository is visible only to users in the same business. */
  | 'INTERNAL'
  /** The repository is visible only to those with explicit access. */
  | 'PRIVATE'
  /** The repository is visible to everyone. */
  | 'PUBLIC';

/** The possible states that can be requested when creating a check run. */
export type RequestableCheckStatusState =
  /** The check suite or run has been completed. */
  | 'COMPLETED'
  /** The check suite or run is in progress. */
  | 'IN_PROGRESS'
  /** The check suite or run is in pending state. */
  | 'PENDING'
  /** The check suite or run has been queued. */
  | 'QUEUED'
  /** The check suite or run is in waiting state. */
  | 'WAITING';

/** The possible digest algorithms used to sign SAML requests for an identity provider. */
export type SamlDigestAlgorithm =
  /** SHA1 */
  | 'SHA1'
  /** SHA256 */
  | 'SHA256'
  /** SHA384 */
  | 'SHA384'
  /** SHA512 */
  | 'SHA512';

/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
export type SamlSignatureAlgorithm =
  /** RSA-SHA1 */
  | 'RSA_SHA1'
  /** RSA-SHA256 */
  | 'RSA_SHA256'
  /** RSA-SHA384 */
  | 'RSA_SHA384'
  /** RSA-SHA512 */
  | 'RSA_SHA512';

/** Properties by which saved reply connections can be ordered. */
export type SavedReplyOrderField =
  /** Order saved reply by when they were updated. */
  | 'UPDATED_AT';

/** Represents the individual results of a search. */
export type SearchType =
  /** Returns matching discussions in repositories. */
  | 'DISCUSSION'
  /** Returns results matching issues in repositories. */
  | 'ISSUE'
  /** Returns results matching repositories. */
  | 'REPOSITORY'
  /** Returns results matching users and organizations on GitHub. */
  | 'USER';

/** The possible ecosystems of a security vulnerability's package. */
export type SecurityAdvisoryEcosystem =
  /** PHP packages hosted at packagist.org */
  | 'COMPOSER'
  /** Go modules */
  | 'GO'
  /** Java artifacts hosted at the Maven central repository */
  | 'MAVEN'
  /** JavaScript packages hosted at npmjs.com */
  | 'NPM'
  /** .NET packages hosted at the NuGet Gallery */
  | 'NUGET'
  /** Python packages hosted at PyPI.org */
  | 'PIP'
  /** Ruby gems hosted at RubyGems.org */
  | 'RUBYGEMS'
  /** Rust crates */
  | 'RUST';

/** Identifier formats available for advisories. */
export type SecurityAdvisoryIdentifierType =
  /** Common Vulnerabilities and Exposures Identifier. */
  | 'CVE'
  /** GitHub Security Advisory ID. */
  | 'GHSA';

/** Properties by which security advisory connections can be ordered. */
export type SecurityAdvisoryOrderField =
  /** Order advisories by publication time */
  | 'PUBLISHED_AT'
  /** Order advisories by update time */
  | 'UPDATED_AT';

/** Severity of the vulnerability. */
export type SecurityAdvisorySeverity =
  /** Critical. */
  | 'CRITICAL'
  /** High. */
  | 'HIGH'
  /** Low. */
  | 'LOW'
  /** Moderate. */
  | 'MODERATE';

/** Properties by which security vulnerability connections can be ordered. */
export type SecurityVulnerabilityOrderField =
  /** Order vulnerability by update time */
  | 'UPDATED_AT';

/** Properties by which sponsor connections can be ordered. */
export type SponsorOrderField =
  /** Order sponsorable entities by login (username). */
  | 'LOGIN'
  /** Order sponsors by their relevance to the viewer. */
  | 'RELEVANCE';

/** Properties by which sponsorable connections can be ordered. */
export type SponsorableOrderField =
  /** Order sponsorable entities by login (username). */
  | 'LOGIN';

/** The possible actions that GitHub Sponsors activities can represent. */
export type SponsorsActivityAction =
  /** The activity was cancelling a sponsorship. */
  | 'CANCELLED_SPONSORSHIP'
  /** The activity was starting a sponsorship. */
  | 'NEW_SPONSORSHIP'
  /** The activity was scheduling a downgrade or cancellation. */
  | 'PENDING_CHANGE'
  /** The activity was funds being refunded to the sponsor or GitHub. */
  | 'REFUND'
  /** The activity was disabling matching for a previously matched sponsorship. */
  | 'SPONSOR_MATCH_DISABLED'
  /** The activity was changing the sponsorship tier, either directly by the sponsor or by a scheduled/pending change. */
  | 'TIER_CHANGE';

/** Properties by which GitHub Sponsors activity connections can be ordered. */
export type SponsorsActivityOrderField =
  /** Order activities by when they happened. */
  | 'TIMESTAMP';

/** The possible time periods for which Sponsors activities can be requested. */
export type SponsorsActivityPeriod =
  /** Don't restrict the activity to any date range, include all activity. */
  | 'ALL'
  /** The previous calendar day. */
  | 'DAY'
  /** The previous thirty days. */
  | 'MONTH'
  /** The previous seven days. */
  | 'WEEK';

/** The different kinds of goals a GitHub Sponsors member can have. */
export type SponsorsGoalKind =
  /** The goal is about getting a certain amount in USD from sponsorships each month. */
  | 'MONTHLY_SPONSORSHIP_AMOUNT'
  /** The goal is about reaching a certain number of sponsors. */
  | 'TOTAL_SPONSORS_COUNT';

/** Properties by which Sponsors tiers connections can be ordered. */
export type SponsorsTierOrderField =
  /** Order tiers by creation time. */
  | 'CREATED_AT'
  /** Order tiers by their monthly price in cents */
  | 'MONTHLY_PRICE_IN_CENTS';

/** Properties by which sponsorship update connections can be ordered. */
export type SponsorshipNewsletterOrderField =
  /** Order sponsorship newsletters by when they were created. */
  | 'CREATED_AT';

/** Properties by which sponsorship connections can be ordered. */
export type SponsorshipOrderField =
  /** Order sponsorship by creation time. */
  | 'CREATED_AT';

/** The privacy of a sponsorship */
export type SponsorshipPrivacy =
  /** Private */
  | 'PRIVATE'
  /** Public */
  | 'PUBLIC';

/** Properties by which star connections can be ordered. */
export type StarOrderField =
  /** Allows ordering a list of stars by when they were created. */
  | 'STARRED_AT';

/** The possible commit status states. */
export type StatusState =
  /** Status is errored. */
  | 'ERROR'
  /** Status is expected. */
  | 'EXPECTED'
  /** Status is failing. */
  | 'FAILURE'
  /** Status is pending. */
  | 'PENDING'
  /** Status is successful. */
  | 'SUCCESS';

/** The possible states of a subscription. */
export type SubscriptionState =
  /** The User is never notified. */
  | 'IGNORED'
  /** The User is notified of all conversations. */
  | 'SUBSCRIBED'
  /** The User is only notified when participating or @mentioned. */
  | 'UNSUBSCRIBED';

/** Properties by which team discussion comment connections can be ordered. */
export type TeamDiscussionCommentOrderField =
  /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
  | 'NUMBER';

/** Properties by which team discussion connections can be ordered. */
export type TeamDiscussionOrderField =
  /** Allows chronological ordering of team discussions. */
  | 'CREATED_AT';

/** Properties by which team member connections can be ordered. */
export type TeamMemberOrderField =
  /** Order team members by creation time */
  | 'CREATED_AT'
  /** Order team members by login */
  | 'LOGIN';

/** The possible team member roles; either 'maintainer' or 'member'. */
export type TeamMemberRole =
  /** A team maintainer has permission to add and remove team members. */
  | 'MAINTAINER'
  /** A team member has no administrative permissions on the team. */
  | 'MEMBER';

/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export type TeamMembershipType =
  /** Includes immediate and child team members for the team. */
  | 'ALL'
  /** Includes only child team members for the team. */
  | 'CHILD_TEAM'
  /** Includes only immediate members of the team. */
  | 'IMMEDIATE';

/** Properties by which team connections can be ordered. */
export type TeamOrderField =
  /** Allows ordering a list of teams by name. */
  | 'NAME';

/** The possible team privacy values. */
export type TeamPrivacy =
  /** A secret team can only be seen by its members. */
  | 'SECRET'
  /** A visible team can be seen and @mentioned by every member of the organization. */
  | 'VISIBLE';

/** Properties by which team repository connections can be ordered. */
export type TeamRepositoryOrderField =
  /** Order repositories by creation time */
  | 'CREATED_AT'
  /** Order repositories by name */
  | 'NAME'
  /** Order repositories by permission */
  | 'PERMISSION'
  /** Order repositories by push time */
  | 'PUSHED_AT'
  /** Order repositories by number of stargazers */
  | 'STARGAZERS'
  /** Order repositories by update time */
  | 'UPDATED_AT';

/** The role of a user on a team. */
export type TeamRole =
  /** User has admin rights on the team. */
  | 'ADMIN'
  /** User is a member of the team. */
  | 'MEMBER';

/** Reason that the suggested topic is declined. */
export type TopicSuggestionDeclineReason =
  /** The suggested topic is not relevant to the repository. */
  | 'NOT_RELEVANT'
  /** The viewer does not like the suggested topic. */
  | 'PERSONAL_PREFERENCE'
  /** The suggested topic is too general for the repository. */
  | 'TOO_GENERAL'
  /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
  | 'TOO_SPECIFIC';

/** The possible durations that a user can be blocked for. */
export type UserBlockDuration =
  /** The user was blocked for 1 day */
  | 'ONE_DAY'
  /** The user was blocked for 30 days */
  | 'ONE_MONTH'
  /** The user was blocked for 7 days */
  | 'ONE_WEEK'
  /** The user was blocked permanently */
  | 'PERMANENT'
  /** The user was blocked for 3 days */
  | 'THREE_DAYS';

/** Properties by which user status connections can be ordered. */
export type UserStatusOrderField =
  /** Order user statuses by when they were updated. */
  | 'UPDATED_AT';

/** Properties by which verifiable domain connections can be ordered. */
export type VerifiableDomainOrderField =
  /** Order verifiable domains by their creation date. */
  | 'CREATED_AT'
  /** Order verifiable domains by the domain name. */
  | 'DOMAIN';
