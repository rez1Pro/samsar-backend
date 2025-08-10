// 🌟 Listing Categories
export enum ListingCategory {
  VEHICLES = "vehicles",
  REAL_ESTATE = "realEstate",
}

// 🌟 Vehicle Types
export enum VehicleType {
  CARS = "CARS",
  MOTORCYCLES = "MOTORCYCLES",
}

// 🌟 Property Types
export enum PropertyType {
  HOUSE = "HOUSE",
  APARTMENT = "APARTMENT",
  CONDO = "CONDO",
  LAND = "LAND",
  COMMERCIAL = "COMMERCIAL",
  OTHER = "OTHER",
}

// 🌟 Vehicle Details
export enum FuelType {
  GASOLINE = "gasoline",
  DIESEL = "diesel",
  ELECTRIC = "electric",
  HYBRID = "hybrid",
  PLUGIN_HYBRID = "pluginHybrid",
  LPG = "lpg",
  CNG = "cng",
  OTHER = "other",
}

export enum TransmissionType {
  AUTOMATIC = "automatic",
  MANUAL = "manual",
  SEMI_AUTOMATIC = "semiAutomatic",
  CONTINUOUSLY_VARIABLE = "cvt",
  DUAL_CLUTCH = "dualClutch",
  OTHER = "other",
}

export enum Condition {
  NEW = "new",
  LIKE_NEW = "likeNew",
  EXCELLENT = "excellent",
  GOOD = "good",
  FAIR = "fair",
  POOR = "poor",
  SALVAGE = "salvage",
}

// 🌟 Settings Related Enums
export enum LanguageCode {
  EN = "en",
  ES = "es",
  FR = "fr",
  DE = "de",
  AR = "ar",
}
// 🌟 Listing Status
export enum ListingStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  SOLD = "sold",
  RENTED = "rented",
  PENDING = "pending",
}

// 🌟 Listing Action Types
export enum ListingAction {
  SALE = "SALE",
  RENT = "RENT",
}

// 🌟 Report System Enums
export enum ReportType {
  USER = "user",
  LISTING = "listing",
  MESSAGE = "message",
  COMMENT = "comment",
}

export enum ReportStatus {
  PENDING = "pending",
  INVESTIGATING = "investigating",
  RESOLVED = "resolved",
  DISMISSED = "dismissed",
}

export enum ReportReason {
  SPAM = "spam",
  INAPPROPRIATE = "inappropriate",
  MISLEADING = "misleading",
  OFFENSIVE = "offensive",
  HARASSMENT = "harassment",
  OTHER = "other",
}

// 🌟 Notification Types
export enum NotificationType {
  NEW_MESSAGE = "NEW_MESSAGE",
  LISTING_INTEREST = "LISTING_INTEREST",
  PRICE_UPDATE = "PRICE_UPDATE",
  LISTING_SOLD = "LISTING_SOLD",
  SYSTEM_NOTICE = "SYSTEM_NOTICE",
  LISTING_CREATED = "LISTING_CREATED",
  NEW_LISTING_MATCH = "NEW_LISTING_MATCH",
  ACCOUNT_WARNING = "ACCOUNT_WARNING",
  SYSTEM_ANNOUNCEMENT = "SYSTEM_ANNOUNCEMENT",
}
